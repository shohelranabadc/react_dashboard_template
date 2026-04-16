import { createBrowserRouter } from 'react-router'
import MainLayout      from '../layouts/MainLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import Home            from '../pages/mainPages/home/Home'
import NotFound        from '../pages/mainPages/notFound/NotFound'
import Dashboard       from '../pages/dashboardPages/Dashboard'
import Users           from '../pages/dashboardPages/Users'
import Content         from '../pages/dashboardPages/Content'
import Settings        from '../pages/dashboardPages/Settings'

const router = createBrowserRouter([

  // ─── Public / Landing ──────────────────────────
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // আরও page যোগ করলে এখানে আসবে
    ],
  },

  // ─── Dashboard ─────────────────────────────────
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { index: true,       element: <Dashboard /> },
      { path: 'users',     element: <Users /> },
      { path: 'content',   element: <Content /> },
      { path: 'settings',  element: <Settings /> },
    ],
  },

  // ─── 404 — সব অজানা URL এখানে আসবে ────────────
  {
    path: '*',
    element: <NotFound />,
  },

])

export default router