import NavBar from '../components/NavBar';
import { useState } from "react";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../pinata";
import Bounty from '../Bounty.json';
import { useLocation } from "react-router";
import { hexStripZeros } from 'ethers/lib/utils';
import contract from '../Bounty.json';

/**
 * @returns List Bounty Page
 */
const ListBounty = () => {
    const [formParams, updateFormParams] = useState({ name: '', description: '', price: ''});
    const [fileURL, setFileURL] = useState(null);
    const ethers = require("ethers");
    const [message, updateMessage] = useState('');
    const location = useLocation();

    //OnChangeFile: uploads the NFT image to IPFS
    async function OnChangeFile(e) {
        var file = e.target.files[0];
        //check for file extension
        try {
            //upload the file to IPFS
            const response = await uploadFileToIPFS(file);
            if(response.success === true) {
                console.log("Uploaded image to Pinata: ", response.pinataURL)
                setFileURL(response.pinataURL);
            }
        }
        catch(e) {
            console.log("Error during file upload", e);
        }
    }

    //uploadMetadataToIPFS: uploads the metadata to IPFS
    async function uploadMetadataToIPFS() {
        const {name, description, price} = formParams;
        if( !name || !description || !price || !fileURL)
            return;

        const nftJSON = {
            name, description, price, image: fileURL
        }

        try {
            const response = await uploadJSONToIPFS(nftJSON);
            if(response.success === true){
                console.log("Uploaded JSON to Pinata: ", response)
                return response.pinataURL;
            }
        }
        catch(e) {
            console.log("error uploading JSON metadata:", e)
        }
    }

    async function listBounty(e) {
        e.preventDefault();

        try {
            const metadataURL = await uploadMetadataToIPFS();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            updateMessage("Please wait.. uploading (upto 5 mins)")

            const contractAddress = "0xe56DEc70652cb06bDB18264D2d5DB502A512468a";
            const abi = contract.result;
            let bountyContract = new ethers.Contract(contractAddress, abi, signer);

            const price = ethers.utils.parseUnits(formParams.price, 'ether');
            let depositPrice = await bountyContract.getBalance();
            depositPrice = depositPrice.toString();
            console.log("deposit price", price);
            alert("PRICE CALL PASSED: " , depositPrice);

            // my wallet address: 
            let transaction = await bountyContract.fund(signer, { value: price });
            await transaction.wait()

            console.log("transaction: ", transaction.toString());
            alert("TRANSACTION CALL PASSED: " , transaction.toString());

            alert("Successfully listed your Bounty!");
            updateMessage("");
            updateFormParams({ name: '', description: '', price: ''});
            window.location.replace("/")
        }
        catch(e) {
            console.log( "Upload error: "+ e )
        }
    }

    console.log("Working", process.env);
    return (
        <div className="bg-black w-full h-screen" class="listBounty">
            {/** Section: NavBar */}
            <NavBar></NavBar>

            {/** Section: Form */}
            <div className="bg-black flex flex-col place-items-center mt-10" id="bountyForm">
            <form className="bg-white border-red-400 border-4 shadow-md rounded px-8 pt-4 pb-8 mb-4">
                <h3 className="text-center text-2xl font-bold text-black mb-8">List Your Bounty</h3>
                <div className="mb-4">
                    <label className="block text-black-500 text-sm font-bold mb-2" htmlFor="name">Enter Bounty Name:</label>
                    <input className="bg-blue-100 border-black border-3 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="BuildDaoBounty#1234" onChange={e => updateFormParams({...formParams, name: e.target.value})} value={formParams.name}></input>
                </div>
                <div className="mb-6">
                    <label className="block text-black-500 text-sm font-bold mb-2" htmlFor="description">Bounty Description</label>
                    <textarea className="bg-blue-100 border-black border-3 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" cols="40" rows="5" id="description" type="text" placeholder="Build DAO Bounty Description" value={formParams.description} onChange={e => updateFormParams({...formParams, description: e.target.value})}></textarea>
                </div>
                <div className="mb-6">
                    <label className="block text-black-500 text-sm font-bold mb-2" htmlFor="price">Fund Bounty Price (in ETH)</label>
                    <input className="bg-blue-100 border-black border-3 shadow appearance-none border rounded w-full py-2 px-3 text-blackeading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Min 0.01 ETH" step="0.01" value={formParams.price} onChange={e => updateFormParams({...formParams, price: e.target.value})}></input>
                </div>
                <div>
                    <label className="block text-black-500 text-sm font-bold mb-2" htmlFor="image">Upload Image</label>
                    <input type={"file"} onChange={OnChangeFile}></input>
                </div>
                <br></br>
                <div className="text-green text-center">{message}</div>
                <button onClick={listBounty} className="button-85 font-bold mt-10 w-full bg-black text-white rounded p-2 shadow-lg">
                    List Your Bounty
                </button>
            </form>
        </div>          
        </div>
    );
}

export default ListBounty;