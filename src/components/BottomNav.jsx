import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BottomNav(){
  const router = useRouter()
  const path = router.pathname

  return (
    <nav className="bottom-nav">
      <Link href="/explore"><button className={`nav-btn ${path === '/explore' ? 'active' : ''}`}>Explore</button></Link>
      <Link href="/"><button className={`nav-btn ${path === '/' ? 'active' : ''}`}>Offers</button></Link>
      <Link href="/bookings"><button className={`nav-btn ${path === '/bookings' ? 'active' : ''}`}>Bookings</button></Link>
      <Link href="/profile"><button className={`nav-btn ${path === '/profile' ? 'active' : ''}`}>Profile</button></Link>
    </nav>
  )
}
