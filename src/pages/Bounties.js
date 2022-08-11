import NavBar from '../components/NavBar';
import { useState } from "react";
import Bounty from '../components/Bounty';

/**
 * @returns Bounties Page
 */
const Bounties = () => {
    const sampleData = [
        {
            "name": "Community Manager",
            "description": "Participate in community conversations, share useful links and memes, and promote the DAO on social media.",
            "website":"http://axieinfinity.io",
            "image":"/communitymanager.jpg",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "Core Projects",
            "description": "Join one of the DAO’s core teams or projects. For example, we have teams for creating content, growing the DAO, or engaging the community.",
            "website":"http://axieinfinity.io",
            "image":"/project.jpeg",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "Lead/Core Contributor",
            "description": "Looking for a core contributor/team lead for our DAO. Submit an application to become a core contributor to start contributing.",
            "website":"http://axieinfinity.io",
            "image":"/contributor.jpeg",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "Community Manager",
            "description": "Participate in community conversations, share useful links and memes, and promote the DAO on social media.",
            "website":"http://axieinfinity.io",
            "image":"/communitymanager.jpg",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "Core Projects",
            "description": "Join one of the DAO’s core teams or projects. For example, we have teams for creating content, growing the DAO, or engaging the community.",
            "website":"http://axieinfinity.io",
            "image":"/project.jpeg",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
        },
        {
            "name": "Lead/Core Contributor",
            "description": "Looking for a core contributor/team lead for our DAO. Submit an application to become a core contributor to start contributing.",
            "website":"http://axieinfinity.io",
            "image":"/contributor.jpeg",
            "price":"0.03ETH",
            "currentlySelling":"True",
            "address":"0xe81Bf5A757C4f7F82a2F23b1e59bE45c33c5b13",
        },
    ];
    const [data, updateData] = useState(sampleData);
    const [dataFetched, updateFetched] = useState(false);
    

    return (
        <div class="bg-black w-full h-screen-flex">
            <NavBar></NavBar>
            <div className="flex flex-col place-items-center mt-10">
                <div className="md:text-4xl font-bold text-lime-400">
                    Open Bounties
                </div>
                <div className="flex mt-10 justify-between flex-wrap max-w-screen-xl text-center">
                    {data.map((value, index) => {
                        return <Bounty data={value} key={index}></Bounty>;
                    })}
                </div>
            </div>            
        </div>
    );
}

export default Bounties;