const Header = () => {
   return (
      <header className="w-full p-4 bg-gray-200 dark:bg-gray-800">
         <h1 className="text-2xl font-bold text-center">Welcome to My Website</h1>
         <nav>
            <ul>
               <li><a href="/home">Home</a></li>
               <li><a href="/about">About</a></li>
            </ul>
         </nav>
      </header>
   );
}

export default Header;