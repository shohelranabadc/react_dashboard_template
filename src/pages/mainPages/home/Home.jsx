import React from 'react'
import { ArrowRight, Zap, Shield, BarChart3, Globe } from 'lucide-react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white dark:bg-[#0d1117]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              আপনার ব্যবসার জন্য আধুনিক <br />
              <span className="text-blue-600 tracking-tight">স্মার্ট ড্যাশবোর্ড সলিউশন</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              মাস্টারড্যাশ দিয়ে আপনার ডেটা ম্যানেজমেন্ট করুন আরও সহজ এবং দ্রুত। আমরা দিচ্ছি উন্নত সিকিউরিটি এবং রিয়েল-টাইম অ্যানালিটিক্স সুবিধা।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/dashboard" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                ফ্রি ট্রায়াল শুরু করুন
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                ডেমো দেখুন
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Decoration (Optional) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10 dark:opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* 2. Features Section (যেকোনো কম্পোনেন্ট এখানে যোগ করা সহজ হবে) */}
      <section className="py-20 bg-slate-50 dark:bg-[#161b24]/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">আমাদের বিশেষত্ব</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Zap className="text-amber-500" />}
              title="সুপার ফাস্ট"
              desc="লেটেস্ট টেকনোলজি ব্যবহারের ফলে আমাদের সিস্টেম অত্যন্ত দ্রুত কাজ করে।"
            />
            <FeatureCard 
              icon={<Shield className="text-green-500" />}
              title="নিরাপদ ডেটা"
              desc="এন্ড-টু-এন্ড এনক্রিপশন এর মাধ্যমে আপনার ডেটা থাকে ১০০% নিরাপদ।"
            />
            <FeatureCard 
              icon={<BarChart3 className="text-blue-500" />}
              title="অ্যানালিটিক্স"
              desc="বিস্তারিত গ্রাফ এবং রিপোর্টের মাধ্যমে ব্যবসার অগ্রগতি ট্রাক করুন।"
            />
            <FeatureCard 
              icon={<Globe className="text-purple-500" />}
              title="গ্লোবাল এক্সেস"
              desc="পৃথিবীর যেকোনো প্রান্ত থেকে আপনার ড্যাশবোর্ড কন্ট্রোল করুন।"
            />
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-blue-600 rounded-[32px] p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-500/40 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">আপনার ব্যবসাকে আজই ডিজিটাল করুন</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              যোগ দিন হাজারো উদ্যোক্তাদের সাথে যারা তাদের ব্যবসাকে আরও এক ধাপ এগিয়ে নিতে আমাদের ব্যবহার করছেন।
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
              এখনই শুরু করুন
            </button>
          </div>
          {/* Decorative Circles inside CTA */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>

    </div>
  )
}

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 bg-white dark:bg-[#1c2333] border border-slate-200 dark:border-slate-800 rounded-[24px] hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1">
    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{title}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
  </div>
)

export default Home