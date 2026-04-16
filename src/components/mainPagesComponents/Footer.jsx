import { Link } from 'react-router'
import { LayoutDashboard, Facebook, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-[#161b24] border-t border-slate-200 dark:border-[#252d3d] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                <LayoutDashboard size={16} className="text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800 dark:text-white tracking-tight">
                Master<span className="text-blue-500">Dash</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              আমরা আধুনিক প্রযুক্তি ব্যবহার করে আপনার ব্যবসার ডিজিটাল রূপান্তরকে সহজ এবং কার্যকর করি। স্মার্ট ড্যাশবোর্ড এবং আইওটি সলিউশনে আমরাই সেরা।
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-blue-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-blue-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-6">কুইক লিঙ্ক</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">হোম পেজ</Link></li>
              <li><Link to="/dashboard" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">ইউজার ড্যাশবোর্ড</Link></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">পরিষেবা সমূহ</a></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">প্রাইসিং</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-6">সহায়তা</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">ডকুমেন্টেশন</a></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">টার্মস এন্ড কন্ডিশন</a></li>
              <li><a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors">হেল্প সেন্টার</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-6">যোগাযোগ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                <span>ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <span>support@masterdash.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {currentYear} <span className="font-bold text-blue-500">Eco Softly</span>. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-widest font-medium">
            Developed with ❤️ in Bangladesh
          </p>
        </div>

      </div>
    </footer>
  )
}