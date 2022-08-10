import NavBar from '../components/NavBar';

function Home() {
  return (
    <div class="w-full h-screen flex" className="">
      {/** Section: NavBar */}
      <NavBar></NavBar>

      {/** Section: Start Contributing */}
      <section class="bg-white">
        <div class="border-2 border-black grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-10 xl:gap-0 lg:py-2 lg:grid-cols-12">
            <div class="px-4 py-8 mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-1xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-xl xl:text-6xl dark:text-white">
                  Start contributing to your favorite DAOs!
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Earn crypto and NFTS for your contributions. Collect your rewards to showcase your contributions and keep track of all the great work you've done!
                </p>
                <a href="https://bounty-bucks.vercel.app/" class="button-85 inline-flex items-center justify-center px-8 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-red focus:ring-4 focus:ring-red dark:focus:ring-red-900">
                    Start contributing!
                    <svg class="w-5 h-5 ml-2 -mr-1 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/home1.png" alt="Contribute"></img>
            </div>                
        </div>
    </section>

    {/** Section: Earn Crypto & Rewards For Your Contributions: */}
    <section class="mt-20 bg-white">
      <div class="border-2 border-black max-w-screen-xl px-4 py-8 mx-auto lg:gap-10 xl:gap-0 lg:py-2 lg:grid-cols-12">
        <h1 class="mt-10 text-center max-w-1xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-2xl xl:text-6xl dark:text-white">
            Earn Crypto and Rewards For Your Contributions!
        </h1>
        <a 
          href="https://bounty-bucks.vercel.app/daos" class="button-85 mt-10 ml-80 mr-80 flex justify-center items-center py-4 text-base font-medium text-center text-black rounded-lg bg-transparent hover:bg-red focus:ring-4 focus:ring-red dark:focus:ring-red-900 border-black border-2">
            Start Exploring DAOs On Our Platform Now
        </a>
        <div class="px-4 py-8 mr-auto mb-100 place-self-center lg:col-span-12 mx-10 space-y-4 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-3">
          <div class="py-10 w-80 rounded hover:shadow-2xl">
              <img src="/home2.jpeg"  alt="photo1"></img>
              <h1 class="py-6 mt-2 text-center font-bold max-w-s text-s font-light tracking-tight leading-none md:text-lg xl:text-xl dark:text-white">
                Join a DAO
              </h1>
          </div>
          <div class="w-80 rounded hover:shadow-2xl">
              <img src="/home3.webp" alt="photo2"></img>
              <h1 class="mt-2 text-center font-bold max-w-s text-s font-light tracking-tight leading-none md:text-lg xl:text-xl dark:text-white">
                Contribute to the DAO
              </h1>
          </div>
          <div class="w-80 rounded hover:shadow-2xl">
              <img src="/home4.webp" alt="photo3"></img>
              <h1 class="mt-2 text-center font-bold max-w-s text-s font-light tracking-tight leading-none md:text-lg xl:text-xl dark:text-white">
                Earn Rewards
              </h1>
          </div> 
        </div>
      </div>
    </section>

    {/** Section: Earn in Web 3.0 */}
    <section class="mt-20 bg-white">
      <div class="border-2 border-black grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-10 l:gap-0 m:py-2 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/home5.webp" alt="Earn"></img>
        </div>   
        <div class="px-4 py-8 mr-auto place-self-center lg:col-span-7">
            <p class="max-w-2xl mb-8 font-light font-bold text-red-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              CONTRIBUTE-TO-EARN
            </p>
            <h1 class="max-w-1xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-xl xl:text-6xl dark:text-white">
              Earn in Web 3.0
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Complete tasks to get rewarded. We give you access to earn crypto, NFTs, exclusive perks and so much more!
            </p>
            <a href="https://bounty-bucks.vercel.app/bounties" class="button-85 inline-flex items-center justify-center px-8 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-red focus:ring-4 focus:ring-red dark:focus:ring-red-900">
                Find Your Next Project
            </a>
        </div>             
      </div>
    </section>

    {/** Section: Earn Crypto & Rewards For Your Contributions: */}
    <section class="mt-20 bg-white">
      <div class="border-2 border-black max-w-screen-xl px-4 py-8 mx-auto lg:gap-10 xl:gap-0 lg:py-2 lg:grid-cols-12">
        <h1 class="mt-10 text-center max-w-1xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-2xl xl:text-6xl dark:text-white">
          Choose how you want to contribute, earn, and  keep track of work!
        </h1>
        <a 
          href="https://bounty-bucks.vercel.app/daos" class="button-85 mt-10 ml-80 mr-80 flex justify-center items-center py-4 text-base font-medium text-center text-black rounded-lg bg-transparent hover:bg-red focus:ring-4 focus:ring-red dark:focus:ring-red-900 border-black border-2">
            Explore Ways You Can Contribute
        </a>
        <div class="px-4 py-8 mr-auto mb-100 place-self-center lg:col-span-12  space-y-4 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-4">
          <div class="w-60 rounded hover:shadow-2xl">
              <img src="/home6.webp"  alt="Choose project"></img>
              <h1 class="mt-2 text-center font-semibold max-w-s text-s font-light tracking-tight leading-none md:text-lg xl:text-xl dark:text-white">
                Choose the project to contribute to, and get accepted to work on it.
              </h1>
          </div>
          <div class="w-60 rounded hover:shadow-2xl">
              <img src="/home7.webp" alt="Accept Task"></img>
              <h1 class="mt-2 text-center font-semibold max-w-s text-s font-light tracking-tight leading-none md:text-lg xl:text-xl dark:text-white">
                Once accepted, complete the tasks outlined and submit your work.
              </h1>
          </div>
          <div class="w-90 rounded hover:shadow-2xl">
              <img src="/home8.jpeg" alt="Verification"></img>
              <h1 class="mt-8 text-center font-semibold max-w-s text-s font-light tracking-tight leading-none md:text-lg xl:text-xl dark:text-white">
                The DAO will verify the tasks completion and that you qualify to receive funds.
              </h1>
          </div>
          <div class="w-90 rounded hover:shadow-2xl">
              <img src="/home9.webp" alt="Receive Rewards"></img>
              <h1 class="mt-8 text-center font-semibold max-w-s text-s font-light tracking-tight leading-none md:text-lg xl:text-xl dark:text-white">
                Receive your reward for the contributions you've made in crypto, NFTs, or exclusive perks!
              </h1>
          </div>
        </div>
      </div>
    </section>

    {/** Section: Launch a Project for DAOs */}
    <section class="mt-20 bg-white">
      <div class="border-2 border-black grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-0 l:gap-0 m:py-2 lg:grid-cols-12 mb-20"> 
        <div class="px-4 py-8 mr-auto place-self-center lg:col-span-7">
            <p class="max-w-2xl mb-6 font-light font-bold text-red-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              START YOUR JOURNEY TODAY.
            </p>
            <h1 class="max-w-1xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-xl xl:text-6xl dark:text-white">
              Launch a Project!
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              If you're a DAO, list your bounties on the best platform for rewards and navigating your contributors journey!
            </p>
            <a href="https://bounty-bucks.vercel.app/bounties" class="button-85 inline-flex items-center justify-center px-8 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-red focus:ring-4 focus:ring-red dark:focus:ring-red-900">
              Sign Up Here!
            </a>
        </div>    
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/home10.png" alt="Earn"></img>
        </div>           
      </div>
    </section>
    </div>
  );
}

export default Home;
