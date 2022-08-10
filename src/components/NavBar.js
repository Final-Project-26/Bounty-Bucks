import '../App.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { getSigner } from '../utils';

/**
 * @returns Top navigation bar
 */
const NavBar = () => {
  const [accounts, setAccounts] = useState(undefined);
  const [address, setAddress] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          'any'
        );

        const signer = provider.getSigner();
        setAddress(await signer.getAddress());
      } catch (error) {
        console.log('click the connect button');
      }
    };
    init();
  }, []);

  return (
    <div>
      <nav class='bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-2 border-black dark:border-gray-600'>
        <div class='container flex flex-wrap justify-between items-center mx-auto'>
          <a
            href='https://github.com/Final-Project-26/Bounty-Bucks'
            class='flex items-center'>
            <img
              src='/bountybuckslogo.png'
              class='mr-1 h-8 sm:h-12'
              alt='Bounty Bucks Logo'></img>
            <span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Bounty Bucks
            </span>
          </a>
          <div class='flex md:order-2'>
            <button
              type='button'
              class='button-85'
              onClick={async () => {
                const signer = await getSigner();
                setAccounts(signer);
                setAddress(await signer.getAddress());
              }}>
              {address ? `${address.slice(0, 7)}...` : 'Connect'}
            </button>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded='false'>
              <span class='sr-only'>Open main menu</span>
              <svg
                class='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'></path>
              </svg>
            </button>
          </div>
          <div
            class='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'>
            <ul class='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <button
                type='button'
                onClick={() => {
                  return window.open(
                    'https://bounty-bucks.vercel.app/',
                    '_top'
                  );
                }}
                class='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent'>
                Home
              </button>
              <button
                type='button'
                onClick={() => {
                  return window.open(
                    'https://bounty-bucks.vercel.app/bounties',
                    '_top'
                  );
                }}
                class='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent'>
                Bounties
              </button>
              <button
                type='button'
                onClick={() => {
                  return window.open(
                    'https://bounty-bucks.vercel.app/daos',
                    '_top'
                  );
                }}
                class='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent'>
                DAOs
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
