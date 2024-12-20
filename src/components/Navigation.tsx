import { Home, Globe, Users, Briefcase, Mail, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const menuItems = [
    { label: "Home", icon: <Home className="w-4 h-4" />, href: "/" },
    { label: "Services", icon: <Globe className="w-4 h-4" />, href: "/services" },
    { label: "Industries", icon: <Building2 className="w-4 h-4" />, href: "/industries" },
    { label: "Consulting", icon: <Users className="w-4 h-4" />, href: "/consulting" },
    { label: "Career", icon: <Briefcase className="w-4 h-4" />, href: "/career" },
    { label: "Contact", icon: <Mail className="w-4 h-4" />, href: "/contact" }
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white font-bold py-1 px-3 rounded">
                db4cloud
              </div>
              <span className="text-[#1A1F2C] font-semibold">technologies</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-[#9b87f5] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          
          <div className="sm:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-[#9b87f5] focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#9b87f5] block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};