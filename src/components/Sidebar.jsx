import { useState } from 'react'
import { NavLink } from 'react-router'
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  ChevronDown,
  ShoppingCart,
  Package,
  Tags,
} from 'lucide-react'

// ─── Nav structure ───────────────────────────────────────────
const NAV = [
  {
    section: 'মেইন',
    items: [
      { to: '/',        label: 'ড্যাশবোর্ড', icon: LayoutDashboard, end: true },
      { to: '/users',   label: 'ব্যবহারকারী', icon: Users },
      { to: '/content', label: 'কন্টেন্ট',    icon: FileText },
    ],
  },
  {
    section: 'শপ',
    items: [
      // এটি ড্রপডাউন মেনু
      {
        label: 'পণ্য ব্যবস্থাপনা',
        icon: Package,
        children: [
          { to: '/products',          label: 'সব পণ্য',    icon: Package },
          { to: '/products/orders',   label: 'অর্ডার',     icon: ShoppingCart },
          { to: '/products/category', label: 'ক্যাটাগরি',  icon: Tags },
        ],
      },
    ],
  },
  {
    section: 'সিস্টেম',
    items: [
      { to: '/settings', label: 'সেটিংস', icon: Settings },
    ],
  },
]

// ─── Single nav link ──────────────────────────────────────────
function NavItem({ to, label, icon: Icon, end, collapsed }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 group
         ${isActive
           ? 'bg-blue-600 text-white'
           : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
         }`
      }
      title={collapsed ? label : undefined}
    >
      <Icon size={18} className="flex-shrink-0" />
      {!collapsed && <span className="text-sm">{label}</span>}
    </NavLink>
  )
}

// ─── Dropdown nav item ────────────────────────────────────────
function DropdownItem({ item, collapsed }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* Trigger */}
      <button
        onClick={() => setOpen(o => !o)}
        title={collapsed ? item.label : undefined}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors duration-150"
      >
        <item.icon size={18} className="flex-shrink-0" />
        {!collapsed && (
          <>
            <span className="flex-1 text-sm text-left">{item.label}</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </>
        )}
      </button>

      {/* Children */}
      {open && !collapsed && (
        <div className="mt-1 ml-4 pl-3 border-l-2 border-gray-200 dark:border-gray-700 space-y-0.5">
          {item.children.map(child => (
            <NavLink
              key={child.to}
              to={child.to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors duration-150
                 ${isActive
                   ? 'bg-blue-600 text-white'
                   : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                 }`
              }
            >
              <child.icon size={15} className="flex-shrink-0" />
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────
export default function Sidebar({ collapsed }) {
  return (
    <aside
      className={`
        flex-shrink-0 flex flex-col h-full
        bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        transition-all duration-300
        ${collapsed ? 'w-16' : 'w-56'}
      `}
    >
      {/* Logo */}
      <div className={`flex items-center h-14 border-b border-gray-200 dark:border-gray-800 px-4 ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <LayoutDashboard size={15} className="text-white" />
        </div>
        {!collapsed && (
          <span className="font-bold text-gray-800 dark:text-white text-sm">
            Master<span className="text-blue-600">Dash</span>
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        {NAV.map(group => (
          <div key={group.section}>
            {/* Section label — hide when collapsed */}
            {!collapsed && (
              <p className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
                {group.section}
              </p>
            )}

            <div className="space-y-0.5">
              {group.items.map(item =>
                item.children ? (
                  <DropdownItem key={item.label} item={item} collapsed={collapsed} />
                ) : (
                  <NavItem key={item.to} {...item} collapsed={collapsed} />
                )
              )}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
