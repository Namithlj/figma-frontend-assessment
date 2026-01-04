import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Toast from '../src/components/Toast'
import Navbar from '../src/components/Navbar'
import BottomNav from '../src/components/BottomNav'

export default function App({ Component, pageProps }) {
  const [toast, setToast] = useState(null)
  const [user, setUser] = useState(null)

  // Optional: restore user from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('spacez_user')
      if (raw) setUser(JSON.parse(raw))
    } catch (e) {}
  }, [])

  useEffect(() => {
    try {
      if (user) localStorage.setItem('spacez_user', JSON.stringify(user))
      else localStorage.removeItem('spacez_user')
    } catch (e) {}
  }, [user])

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2500)
  }

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Component {...pageProps} showToast={showToast} user={user} setUser={setUser} />
      <BottomNav />
      {toast && <Toast message={toast} />}
    </>
  )
}
