import { useState } from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/dashboardComponents/Sidebar'
import Topbar  from '../components/dashboardComponents/Topbar'

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [dark, setDark]           = useState(false)

  return (
    <div className={dark ? 'dark' : ''} style={{ height: '100vh' }}>
      <div className="flex h-full bg-gray-100 dark:bg-gray-950">
        <Sidebar collapsed={collapsed} />
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
    </div>
  )
}
