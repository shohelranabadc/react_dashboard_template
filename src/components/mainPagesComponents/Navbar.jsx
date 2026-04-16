import { Sun, Moon } from 'lucide-react'
import { Link } from 'react-router'

export default function Navbar({ dark, toggleDark }) {
  return (
    <nav className="bg-white/80 dark:bg-[#161b24]/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-[#252d3d] transition-colors duration-300">
      <div className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="font-bold text-xl text-gray-800 dark:text-white tracking-tight">
            Master<span className="text-blue-500">Dash</span>
          </span>
        </Link>

        {/* Right Side: Navigation & Theme Toggle */}
        <div className="flex items-center gap-4">
          
          <Link 
            to="/dashboard" 
            className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ড্যাশবোর্ড
          </Link>

          <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-all shadow-inner"
            title={dark ? "লাইট মোড" : "ডার্ক মোড"}
          >
            {dark ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} className="text-blue-400" />}
          </button>
        </div>

      </div>
    </nav>
  )
}