import Head from 'next/head'
import Link from 'next/link'
import SignInBox from '../src/components/SignInBox'

const bookings = [
  {id:1,place:'Oceanview Studio',dates:'Jan 12-14, 2026',status:'Confirmed'},
  {id:2,place:'City Loft',dates:'Dec 5, 2025',status:'Completed'}
]

export default function Bookings({ user, setUser, showToast }){
  return (
    <div style={{padding:16}}>
      <Head>
        <title>Bookings — Spacez</title>
      </Head>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <h1 style={{margin:0}} className="page-title">Bookings</h1>
        <Link href="/" className="back-btn">Back to Offers</Link>
      </div>
      <SignInBox user={user} setUser={setUser} showToast={showToast} />
      <h2 style={{marginTop:12}}>Your bookings</h2>
      <div style={{marginTop:12,display:'grid',gap:10}}>
        {bookings.map(b=> (
          <div key={b.id} style={{padding:12,border:'1px solid #eee',borderRadius:8,background:'#fff'}}>
            <div style={{fontWeight:700}}>{b.place}</div>
            <div style={{color:'#666',fontSize:13}}>{b.dates}</div>
            <div style={{marginTop:8,fontSize:13,color:b.status==='Confirmed'?'#1b7a3a':'#666'}}>{b.status}</div>
          </div>
        ))}
      </div>

      <p style={{marginTop:18}}><Link href="/">Back to Offers</Link></p>
    </div>
  )
}
