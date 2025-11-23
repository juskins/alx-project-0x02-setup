import Link from "next/link";

const Header = () => {
   return (
      <header className="w-full p-4 bg-gray-200 dark:bg-gray-800">
         <h1 className="text-2xl font-bold text-center">Welcome to My Website</h1>
         <nav>
            <ul>
               <li><Link href="/home">Home</Link></li>
               <li><Link href="/about">About</Link></li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;