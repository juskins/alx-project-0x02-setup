import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
   const router = useRouter();

   const navLinks = [
      { href: "/home", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/posts", label: "Posts" }
   ];

   const isActive = (path: string) => router.pathname === path;

   return (
      <header className="w-full bg-gray-800 dark:bg-gray-900 shadow-lg">
         <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
               <h1 className="text-2xl font-bold text-white">My Website</h1>
               <nav>
                  <ul className="flex space-x-6">
                     {navLinks.map((link) => (
                        <li key={link.href}>
                           <Link 
                              href={link.href}
                              className={`text-lg font-medium transition duration-200 hover:text-blue-400 ${
                                 isActive(link.href) 
                                    ? "text-blue-400 border-b-2 border-blue-400 pb-1" 
                                    : "text-gray-300"
                              }`}
                           >
                              {link.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}

export default Header;