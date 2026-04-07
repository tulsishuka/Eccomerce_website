import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-4 py-4 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        
        {/* Logo */}
      <Link to="/"> <div className="text-2xl font-bold">Shopsy</div> </Link>

        {/* Search */}
        <div className="relative hidden flex-1 max-w-md md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-md border py-2 pl-4 pr-10"
          />
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          
          <Link to="/" className="text-red-500 underline">
            Home
          </Link>

          <Link to="/about">About</Link>

          <Link to="/login">Login</Link>

          <Link to="/contact">Contact</Link>  {/* ✅ ADDED */}

          <Link to="/cart">
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="mt-4 relative md:hidden">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-md border py-2 pl-4 pr-10"
        />
        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
    </nav>
  );
};

export default Navbar;




