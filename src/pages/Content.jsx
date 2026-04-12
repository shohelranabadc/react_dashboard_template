import { useState } from 'react'
import { FilePlus, Pencil, Trash2, X } from 'lucide-react'

const INIT = [
  { id: 1, title: 'গ্রীষ্মকালীন ফ্যাশন ট্রেন্ড', category: 'ফ্যাশন', status: 'প্রকাশিত', date: 'এপ্র ৫' },
  { id: 2, title: 'নতুন কাতান শাড়ি কালেকশন',    category: 'পণ্য',   status: 'খসড়া',     date: 'এপ্র ৪' },
  { id: 3, title: 'ঈদ স্পেশাল অফার ২০২৬',        category: 'অফার',   status: 'প্রকাশিত', date: 'এপ্র ৩' },
  { id: 4, title: 'পহেলা বৈশাখ বিশেষ ব্লগ',      category: 'ব্লগ',   status: 'খসড়া',     date: 'মার ৩০' },
]

const statusCls = {
  'প্রকাশিত':       'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
  'খসড়া':          'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
  'পর্যালোচনাধীন': 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
}

const BLANK = { title: '', category: 'ফ্যাশন', status: 'খসড়া' }

export default function Content() {
  const [posts, setPosts]   = useState(INIT)
  const [modal, setModal]   = useState(null)
  const [form, setForm]     = useState(BLANK)
  const [editId, setEditId] = useState(null)

  const openAdd  = () => { setForm(BLANK); setModal('add') }
  const openEdit = (p) => { setForm({ ...p }); setEditId(p.id); setModal('edit') }
  const del      = (id) => setPosts(p => p.filter(x => x.id !== id))

  const save = () => {
    if (!form.title) return
    if (modal === 'add') {
      setPosts(p => [...p, { ...form, id: Date.now(), date: 'এপ্র ৯' }])
    } else {
      setPosts(p => p.map(x => x.id === editId ? { ...form, id: editId } : x))
    }
    setModal(null)
  }

  return (
    <div className="space-y-5">

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {modal === 'add' ? 'নতুন কন্টেন্ট' : 'সম্পাদনা'}
              </h3>
              <button onClick={() => setModal(null)} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">শিরোনাম</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-800 dark:text-gray-200 outline-none focus:border-blue-500 transition-colors" />
              </div>
              {[
                ['ক্যাটাগরি', 'category', ['ফ্যাশন', 'পণ্য', 'অফার', 'ব্লগ']],
                ['স্ট্যাটাস',  'status',   ['প্রকাশিত', 'খসড়া', 'পর্যালোচনাধীন']],
              ].map(([label, key, opts]) => (
                <div key={key}>
                  <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</label>
                  <select value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-800 dark:text-gray-200 outline-none">
                    {opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>

            <div className="flex gap-2 justify-end mt-5">
              <button onClick={() => setModal(null)} className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">বাতিল</button>
              <button onClick={save} className="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">সংরক্ষণ</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">কন্টেন্ট</h1>
        <button onClick={openAdd} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          <FilePlus size={16} /> নতুন
        </button>
      </div>

      {/* List */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              {['শিরোনাম', 'ক্যাটাগরি', 'স্ট্যাটাস', 'তারিখ', ''].map(h => (
                <th key={h} className="px-4 py-3 text-left text-[10px] uppercase tracking-wider text-gray-400 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {posts.map(p => (
              <tr key={p.id} className="border-b last:border-0 border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 max-w-xs truncate">{p.title}</td>
                <td className="px-4 py-3">
                  <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-full">{p.category}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full ${statusCls[p.status]}`}>{p.status}</span>
                </td>
                <td className="px-4 py-3 text-xs text-gray-400">{p.date}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2 justify-end">
                    <button onClick={() => openEdit(p)} className="p-1.5 rounded-lg text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Pencil size={14} /></button>
                    <button onClick={() => del(p.id)} className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-500 dark:hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
