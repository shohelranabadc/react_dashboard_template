import { useState } from 'react'
import { UserPlus, Pencil, Trash2, X } from 'lucide-react'

const INIT = [
  { id: 1, name: 'Shohel Ahmed',   email: 'shohel@example.com',  role: 'Admin',     status: 'সক্রিয়'   },
  { id: 2, name: 'Rahela Akter',   email: 'rahela@example.com',  role: 'Moderator', status: 'সক্রিয়'   },
  { id: 3, name: 'Farhan Hossain', email: 'farhan@example.com',  role: 'User',      status: 'নিষ্ক্রিয়' },
  { id: 4, name: 'Nasrin Begum',   email: 'nasrin@example.com',  role: 'User',      status: 'সক্রিয়'   },
  { id: 5, name: 'Sumaiya Islam',  email: 'sumaiya@example.com', role: 'Moderator', status: 'সক্রিয়'   },
]

const roleColor = {
  Admin:     'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  Moderator: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400',
  User:      'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
}

const BLANK = { name: '', email: '', role: 'User', status: 'সক্রিয়' }

function Modal({ title, data, setData, onSave, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors">
            <X size={16} />
          </button>
        </div>

        <div className="space-y-3">
          {[['নাম', 'name', 'text'], ['ইমেইল', 'email', 'email']].map(([label, key, type]) => (
            <div key={key}>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</label>
              <input
                type={type}
                value={data[key]}
                onChange={e => setData({ ...data, [key]: e.target.value })}
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-800 dark:text-gray-200 outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          ))}

          {[
            ['ভূমিকা', 'role',   ['Admin', 'Moderator', 'User']],
            ['স্ট্যাটাস', 'status', ['সক্রিয়', 'নিষ্ক্রিয়']],
          ].map(([label, key, opts]) => (
            <div key={key}>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">{label}</label>
              <select
                value={data[key]}
                onChange={e => setData({ ...data, [key]: e.target.value })}
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-800 dark:text-gray-200 outline-none"
              >
                {opts.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
        </div>

        <div className="flex gap-2 justify-end mt-5">
          <button onClick={onClose} className="px-4 py-2 text-sm rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            বাতিল
          </button>
          <button onClick={onSave} className="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
            সংরক্ষণ
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Users() {
  const [users, setUsers]   = useState(INIT)
  const [search, setSearch] = useState('')
  const [modal, setModal]   = useState(null)   // null | 'add' | 'edit'
  const [form, setForm]     = useState(BLANK)
  const [editId, setEditId] = useState(null)

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  const openAdd  = () => { setForm(BLANK); setModal('add') }
  const openEdit = (u) => { setForm({ ...u }); setEditId(u.id); setModal('edit') }
  const del      = (id) => setUsers(p => p.filter(u => u.id !== id))

  const save = () => {
    if (!form.name || !form.email) return
    if (modal === 'add') {
      setUsers(p => [...p, { ...form, id: Date.now() }])
    } else {
      setUsers(p => p.map(u => u.id === editId ? { ...form, id: editId } : u))
    }
    setModal(null)
  }

  return (
    <div className="space-y-5">
      {modal && (
        <Modal
          title={modal === 'add' ? 'নতুন ব্যবহারকারী' : 'সম্পাদনা'}
          data={form}
          setData={setForm}
          onSave={save}
          onClose={() => setModal(null)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">ব্যবহারকারী</h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <UserPlus size={16} /> নতুন
        </button>
      </div>

      {/* Search */}
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="নাম বা ইমেইল দিয়ে খুঁজুন..."
        className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 outline-none placeholder:text-gray-400 focus:border-blue-400 transition-colors"
      />

      {/* Table */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              {['নাম', 'ইমেইল', 'ভূমিকা', 'স্ট্যাটাস', ''].map(h => (
                <th key={h} className="px-4 py-3 text-left text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((u, i) => (
              <tr
                key={u.id}
                className="border-b last:border-0 border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {u.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{u.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{u.email}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${roleColor[u.role]}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full ${u.status === 'সক্রিয়' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400'}`}>
                    {u.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => openEdit(u)}
                      className="p-1.5 rounded-lg text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => del(u.id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-gray-400">কোনো ব্যবহারকারী পাওয়া যায়নি</p>
        )}
      </div>
    </div>
  )
}
