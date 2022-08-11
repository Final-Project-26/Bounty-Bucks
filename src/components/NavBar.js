import '../App.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { getSigner } from '../utils';
import { useLocation } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
/**
 * @returns Top navigation bar
 */
const NavBar = () => {
  
const [connected, toggleConnect] = useState(false);
const location = useLocation();
const [currAddress, updateAddress] = useState('0x');

async function getAddress() {
  const ethers = require("ethers");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const addr = await signer.getAddress();
  updateAddress(addr);
}

function updateButton() {
  const ethereumButton = document.querySelector('.enableEthereumButton');
  ethereumButton.textContent = "Connected";
  ethereumButton.classList.remove("hover:bg-blue-70");
  ethereumButton.classList.remove("bg-blue-500");
  ethereumButton.classList.add("hover:bg-green-70");
  ethereumButton.classList.add("bg-green-500");
}

async function connectWebsite() {

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if(chainId !== '0x5')
    {
      alert('Incorrect network! Switch your metamask network to Rinkeby');
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x5' }],
     })
    }  
    await window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(() => {
        // updateButton();
        console.log("here");
        getAddress();
        window.location.replace(location.pathname)
      });
}

  useEffect(() => {
    let val = window.ethereum.isConnected();
    if(val === true)
    {
      console.log("here");
      getAddress();
      toggleConnect(val);
    }  else {
      updateButton();
    }

    window.ethereum.on('accountsChanged', function(accounts){
      window.location.replace(location.pathname)
    })
  });


  return (
    <div>
      <div className="">
        <nav className="w-screen">
          <ul className='border-black border-2 flex items-end justify-between py-3 bg-transparent text-white pr-5'>
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            <img src={"./bountybuckslogo.png"} alt="" width={80} height={80} className="inline-block -mt-2"/>
            <div className='inline-block font-bold text-black text-2xl ml-2'>
              Bounty Bucks
            </div>
            </Link>
          </li>
          <li className='w-3/6 my-7'>
            <ul className='lg:flex justify-between font-bold mr-12 text-black text-lg'>
              {location.pathname === "/" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/">Home</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/">Home</Link>
              </li>              
              }
              {location.pathname === "/list-bounty" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/list-bounty">List Bounty</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/list-bounty">List Bounty</Link>
              </li>              
              }              
              {location.pathname === "/bounties" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/bounties">Bounties</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/bounties">Bounties</Link>
              </li>              
              }
              {location.pathname === "/profile" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>              
              }        
              <li>
                <button className="enableEthereumButton button-85 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" onClick={connectWebsite}>{connected? "Connected":"Connect Wallet"}</button>
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        <div className='text-black text-bold text-right mr-5 mt-0 text-sm'>
          {currAddress !== "0x" ? "Connected":"Not Connected. Please login to view bounties."} {currAddress !== "0x" ? (currAddress.substring(0,15)+'...'):""}
        </div>
      </div>
      </div>
  );
};

export default NavBar;
