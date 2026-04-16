// import { useState } from 'react'
// import { Routes, Route, Navigate } from 'react-router'
// import DashboardLayout from './layouts/DashboardLayout'
// import Dashboard   from './pages/Dashboard'
// import Users       from './pages/Users'
// import Content     from './pages/Content'
// import Settings    from './pages/Settings'

// export default function App() {
//   const [dark, setDark] = useState(false)

//   return (
//     <div className={dark ? 'dark' : ''} style={{ height: '100%' }}>
//       <Routes>
//         <Route
//           path="/"
//           element={<DashboardLayout dark={dark} setDark={setDark} />}
//         >
//           <Route index          element={<Dashboard />} />
//           <Route path="users"   element={<Users />} />
//           <Route path="content" element={<Content />} />
//           <Route path="settings" element={<Settings />} />
//           <Route path="*"       element={<Navigate to="/" replace />} />
//         </Route>
//       </Routes>
//     </div>
//   )
// }
