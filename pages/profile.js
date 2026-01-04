import Head from 'next/head'
import Link from 'next/link'
import SignInBox from '../src/components/SignInBox'

export default function Profile({ user, setUser, showToast }){
  const u = user ? user : null

  return (
    <div style={{padding:20}}>
      <Head>
        <title>Profile — Spacez</title>
      </Head>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <h1 style={{margin:0}} className="page-title">Profile</h1>
        <Link href="/" className="back-btn">Back to Offers</Link>
      </div>

      <SignInBox user={user} setUser={setUser} showToast={showToast} />

      {u ? (
        <div className="profile-card">
          <div className="profile-top">
            <div className="avatar">{u.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
            <div className="profile-meta">
              <h2 style={{margin:0}}>{u.name}</h2>
              <div style={{color:'#666'}}>{u.email}</div>
              <div style={{marginTop:6,fontSize:13,color:'#777'}}>Member since 2022</div>
            </div>
          </div>

          <section style={{marginTop:18}}>
            <h3 style={{marginBottom:8}}>Recent bookings</h3>
            <div className="booking-list">
              <div className="booking"> <div className="b-title">Oceanview Studio</div> <div className="b-sub">Jan 12-14, 2026 — Confirmed</div> </div>
              <div className="booking"> <div className="b-title">City Loft</div> <div className="b-sub">Dec 5, 2025 — Completed</div> </div>
            </div>
          </section>
        </div>
      ) : (
        <div style={{marginTop:12}}>
          <h2>You're not signed in</h2>
          <p>Click the Sign in button below to sign in and unlock rewards.</p>
          <p><Link href="/" className="back-btn">Back to Offers</Link></p>
        </div>
      )}
    </div>
  )
}
