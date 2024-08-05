// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-green-300 text-gray-700 shadow-md py-4 hover:bg-green-900 hover:text-white">
      <nav className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold ">Better</h1>
          <ul className="flex space-x-4 hover:text-white">
            <li >
              <Link href="/" className="text-black hover:underline hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about-us" className="text-black hover:underline hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="/mortgage-calculator" className="text-black hover:underline hover:text-white">Mortgage Calculator</Link>
            </li>
            <li>
              <Link href="/start" className="text-black hover:underline hover:text-white">Start</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
