import NavBar from '../components/NavBar';

/**
 * @returns DAOs Page
 */
const DAOs = () => {
   
    return (
        <div class="w-full h-screen flex" className="">
            {/** Section: NavBar */}
            <NavBar></NavBar>
            
            {/** Section: Start Contributing */}
            <section class="mt-40 bg-white">
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
        </div>
    );
}

export default DAOs;