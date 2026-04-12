import { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Topbar  from '../components/Topbar'

export default function DashboardLayout({ dark, setDark }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-full bg-gray-100 dark:bg-gray-950">

      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Right side */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          dark={dark}
          setDark={setDark}
        />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
