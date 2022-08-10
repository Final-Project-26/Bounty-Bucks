import NavBar from '../components/NavBar';
import { useLocation, useParams } from 'react-router-dom';
import BountyJSON from "../Bounty.json";
import axios from "axios";
import { useState } from "react";
// import NFTTile from "./NFTTile";

/**
 * @returns Profiles Page
 */
const Profile = () => {
    const [data, updateData] = useState([]);
    const [dataFetched, updateFetched] = useState(false);
    const [address, updateAddress] = useState("0x");
    const [totalPrice, updateTotalPrice] = useState("0");
   

    async function getNFTData() {
        const ethers = require("ethers");
        let sumPrice = 0;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();

        let contract = new ethers.Contract(BountyJSON.address, BountyJSON.abi, signer)

        let transaction = await contract.getBalance()

        // const items = await Promise.all(transaction.map(async i => {
        //     const tokenURI = await contract.tokenURI(i.tokenId);
        //     let meta = await axios.get(tokenURI);
        //     meta = meta.data;

        //     let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        //     let item = {
        //         price,
        //         tokenId: i.tokenId.toNumber(),
        //         seller: i.seller,
        //         owner: i.owner,
        //         image: meta.image,
        //         name: meta.name,
        //         description: meta.description,
        //     }
        //     sumPrice += Number(price);
        //     return item;
        // }))

        // updateData(items);
        updateFetched(true);
        updateAddress(addr);
        // updateTotalPrice(sumPrice.toPrecision(3));
    }

    getNFTData();
    // const params = useParams();
    // const tokenId = params.tokenId;
    // if(!dataFetched)
    //     getNFTData(tokenId);

    return (
        <div class="w-full h-screen flex" className="">
            {/** Section: NavBar */}
            <NavBar></NavBar>
            <div className="profileClass">
            <div className="flex text-center flex-col mt-11 md:text-2xl text-black">
                <div className="mb-5">
                    <h2 className="font-bold">Wallet Address</h2>  
                    {address}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Profile;