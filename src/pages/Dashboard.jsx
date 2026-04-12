import { useEffect, useRef } from 'react'
import { Users, ShoppingCart, TrendingUp, DollarSign } from 'lucide-react'

const cards = [
  { label: 'মোট ব্যবহারকারী', value: '12,480', change: '+8%',  up: true,  icon: Users,         color: 'text-blue-600',   bg: 'bg-blue-50 dark:bg-blue-900/30' },
  { label: 'মোট অর্ডার',      value: '1,247',   change: '+12%', up: true,  icon: ShoppingCart,   color: 'text-green-600',  bg: 'bg-green-50 dark:bg-green-900/30' },
  { label: 'মোট আয়',          value: '৳3,84,500', change: '+5%', up: true,  icon: DollarSign,    color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/30' },
  { label: 'গ্রোথ রেট',        value: '24.5%',   change: '-2%',  up: false, icon: TrendingUp,    color: 'text-amber-600',  bg: 'bg-amber-50 dark:bg-amber-900/30' },
]

export default function Dashboard() {
  const chartRef = useRef(null)
  const chartInst = useRef(null)

  useEffect(() => {
    if (!window.Chart || !chartRef.current) return
    chartInst.current?.destroy()

    const dark = document.querySelector('.dark') !== null
    const grid = dark ? '#1f2937' : '#f3f4f6'
    const tick = dark ? '#6b7280' : '#9ca3af'

    chartInst.current = new window.Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['জান', 'ফেব', 'মার', 'এপ্র', 'মে', 'জুন', 'জুল'],
        datasets: [
          {
            label: 'আয়',
            data: [42, 38, 51, 47, 59, 54, 62],
            backgroundColor: '#3b82f6',
            borderRadius: 6,
          },
          {
            label: 'খরচ',
            data: [31, 28, 36, 34, 41, 39, 45],
            backgroundColor: '#e5e7eb',
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: tick, font: { size: 11 } }, grid: { display: false } },
          y: { ticks: { color: tick, font: { size: 11 } }, grid: { color: grid } },
        },
      },
    })

    return () => chartInst.current?.destroy()
  }, [])

  return (
    <div className="space-y-6">

      {/* Page title */}
      <div>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">ড্যাশবোর্ড</h1>
        <p className="text-sm text-gray-400 mt-0.5">স্বাগতম, Shohel! এপ্রিল ২০২৬</p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map(c => (
          <div
            key={c.label}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide">{c.label}</p>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${c.bg}`}>
                <c.icon size={16} className={c.color} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{c.value}</p>
            <p className={`text-xs mt-1 ${c.up ? 'text-green-500' : 'text-red-500'}`}>
              {c.change} গত মাসের তুলনায়
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">মাসিক আয় ও খরচ</h2>
          <div className="flex gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-blue-500 inline-block" /> আয়
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-gray-200 inline-block" /> খরচ
            </span>
          </div>
        </div>
        <div className="relative h-56">
          <canvas ref={chartRef} />
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
        <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">সাম্প্রতিক অ্যাক্টিভিটি</h2>
        <div className="space-y-3">
          {[
            { text: 'নতুন অর্ডার #1204 গৃহীত',         time: '২ মিনিট আগে',  dot: 'bg-green-500' },
            { text: 'সিস্টেম ব্যাকআপ সম্পন্ন',          time: '১৮ মিনিট আগে', dot: 'bg-blue-500'  },
            { text: 'নতুন ব্যবহারকারী রেজিস্টার করেছেন', time: '১ ঘন্টা আগে',   dot: 'bg-purple-500'},
            { text: 'লগইন ব্যর্থতা সনাক্ত হয়েছে',       time: '২ ঘন্টা আগে',  dot: 'bg-red-500'   },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${a.dot}`} />
              <div className="flex-1 flex items-center justify-between">
                <p className="text-sm text-gray-700 dark:text-gray-300">{a.text}</p>
                <p className="text-xs text-gray-400 ml-4 flex-shrink-0">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
