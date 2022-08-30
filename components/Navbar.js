import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/branch.png" alt="site logo" width={128} height={60} />
                <h1>Little Green</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/plants"><a>Plants</a></Link>
        </nav>
    );
}
 
export default Navbar;