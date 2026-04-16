import React from 'react'
import { Link, useNavigate } from 'react-router'
import { ArrowLeft, Home, Search, AlertCircle } from 'lucide-react'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      
      {/* Background Glow Decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] -z-0"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Animated Icon/Illustration Area */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <h1 className="text-[120px] md:text-[180px] font-black text-slate-100 dark:text-slate-800/50 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white dark:bg-[#1c2333] rounded-3xl shadow-2xl flex items-center justify-center border border-slate-100 dark:border-slate-800 animate-bounce duration-[2000ms]">
                <AlertCircle size={48} className="text-blue-600 md:size-64" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg leading-relaxed max-w-md mx-auto">
          দুঃখিত, আপনি যে লিঙ্কটি খুঁজছেন তা হয়তো সরিয়ে ফেলা হয়েছে অথবা আপনি ভুল ইউআরএল টাইপ করেছেন।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            পিছনে যান
          </button>
          
          <Link 
            to="/" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
          >
            <Home size={18} />
            হোমে ফিরে যান
          </Link>
        </div>

        {/* Quick Search Suggestion (Optional) */}
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800/50">
          <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center justify-center gap-2">
            <Search size={14} />
            সঠিক লিঙ্কের জন্য আমাদের <Link to="/dashboard" className="text-blue-500 hover:underline">ড্যাশবোর্ড</Link> চেক করুন
          </p>
        </div>
      </div>

    </div>
  )
}

export default NotFound