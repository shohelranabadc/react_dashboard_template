import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/mainPagesComponents/Navbar'
import Footer from '../components/mainPagesComponents/Footer'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      {/* এখানে আপনি চাইলে আপনার পাবলিক হেডার বা নেভবার যোগ করতে পারেন */}
      <Navbar />

      <main>
        {/* Outlet মূলত চাইল্ড পেজগুলোকে (যেমন Home) এখানে প্রদর্শন করবে */}
        <Outlet />
      </main>

      {/* এখানে আপনি চাইলে ফুটার যোগ করতে পারেন */}
      <Footer />
    </div>
  )
}

export default MainLayout