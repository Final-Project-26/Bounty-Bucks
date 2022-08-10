import NavBar from '../components/NavBar';

/**
 * @returns Bounties Page
 */
const Bounties = () => {
    //const [nav, setNav] = useState(false);
    //const handleClick = () => setNav(!nav);

    return (
        <div class="w-full h-screen flex" className="">
            {/** Section: NavBar */}
            <NavBar></NavBar>
            <section class="mt-40 bg-white">
                <h1>Bounties</h1>
            </section>
        </div>
    );
}

export default Bounties;