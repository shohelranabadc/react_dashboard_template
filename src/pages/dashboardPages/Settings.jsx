export default function Settings() {
  return (
    <div className="space-y-5 max-w-lg">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">সেটিংস</h1>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 space-y-4">
        <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 pb-3">প্রোফাইল</h2>

        {[['নাম', 'Shohel Ahmed'], ['ইমেইল', 'shohel@example.com'], ['পদবি', 'Super Admin']].map(([label, val]) => (
          <div key={label}>
            <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</label>
            <input
              defaultValue={val}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-800 dark:text-gray-200 outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        ))}

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
          সংরক্ষণ করুন
        </button>
      </div>
    </div>
  )
}
