import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Bounty (data) {
    const newTo = {
        pathname:"/bounties/"+data.data.tokenId
    }
    return (
        <Link to={newTo}>
        <div className="bg-white border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-80 shadow-2xl">
            <img src={data.data.image} alt="" className="w-80 h-40 rounded-lg " />
            <div className= "text-black w-72 to-transparent rounded-lg pt-2 mt-4">
                <strong className="text-xl">{data.data.name}</strong>
                <p className="mt-3 font-bold">
                    {"Description: "}
                </p>
                <p className="mx-2">
                    {data.data.description}
                </p>
                <p className="mt-7 font-bold text-l text-red-600">
                    {"Bounty:\n" + data.data.price}
                </p>
                <p className="mx-2">
                    {"Address: " + data.data.address.substring(0,10)+ '...'}
                </p>
                <a 
                    href="https://bounty-bucks.vercel.app/profile" class="button-85 inline-flex mt-5 py-5 mb-5 justify-center items-center px-7 text-base font-medium text-center text-black rounded-lg bg-transparent hover:bg-red focus:ring-4 focus:ring-red dark:focus:ring-red-900 border-black border-2">
                    Contribute
                </a>
        </div>
        </div>
        </Link>
    )
}

export default Bounty;
