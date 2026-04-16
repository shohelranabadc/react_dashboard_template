import { useState, useRef, useEffect } from 'react'
import { Menu, Sun, Moon, Bell, User, Settings, LogOut, ChevronDown } from 'lucide-react'

export default function Topbar({ collapsed, setCollapsed, dark, setDark }) {
  const [userOpen, setUserOpen] = useState(false)
  const dropRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setUserOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className="flex-shrink-0 h-14 flex items-center justify-between px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">

      {/* Left: hamburger */}
      <button
        onClick={() => setCollapsed(c => !c)}
        className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white transition-colors"
        title="সাইডবার টগল"
      >
        <Menu size={20} />
      </button>

      {/* Right: dark toggle + notifications + user */}
      <div className="flex items-center gap-2">

        {/* Dark / Light toggle */}
        <button
          onClick={() => setDark(d => !d)}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white transition-colors"
          title={dark ? 'লাইট মোড' : 'ডার্ক মোড'}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notification bell */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white transition-colors">
          <Bell size={18} />
          {/* red dot */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
        </button>

        {/* User dropdown */}
        <div className="relative" ref={dropRef}>
          <button
            onClick={() => setUserOpen(o => !o)}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {/* Avatar */}
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              SH
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 leading-none">Shohel</p>
              <p className="text-[10px] text-gray-400 leading-none mt-0.5">Admin</p>
            </div>
            <ChevronDown
              size={13}
              className={`text-gray-400 transition-transform duration-200 ${userOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown menu */}
          {userOpen && (
            <div className="absolute right-0 top-full mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-1 z-50">

              <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-800">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">Shohel Ahmed</p>
                <p className="text-[10px] text-gray-400">shohel@example.com</p>
              </div>

              {[
                { icon: User,     label: 'প্রোফাইল' },
                { icon: Settings, label: 'সেটিংস' },
              ].map(item => (
                <button
                  key={item.label}
                  onClick={() => setUserOpen(false)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <item.icon size={14} />
                  {item.label}
                </button>
              ))}

              <div className="border-t border-gray-100 dark:border-gray-800 mt-1 pt-1">
                <button
                  onClick={() => setUserOpen(false)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <LogOut size={14} />
                  লগ আউট
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </header>
  )
}
