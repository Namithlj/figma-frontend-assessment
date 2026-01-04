import Head from 'next/head'
import Link from 'next/link'
import SignInBox from '../src/components/SignInBox'

const samplePlaces = [
  {id:1,title:'Seaside Villa',price:'₹3,200',desc:'2 guests · 1 bedroom'},
  {id:2,title:'Hilltop Cabin',price:'₹2,100',desc:'4 guests · 2 bedrooms'},
  {id:3,title:'City Studio',price:'₹1,500',desc:'1 guest · Studio'}
]

export default function Explore({ user, setUser, showToast }){
  return (
    <div style={{padding:16}}>
      <Head>
        <title>Explore — Spacez</title>
      </Head>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <h1 style={{margin:0}} className="page-title">Explore</h1>
        <Link href="/" className="back-btn">Back to Offers</Link>
      </div>
      <SignInBox user={user} setUser={setUser} showToast={showToast} />
      <h2 style={{marginTop:12}}>Explore places</h2>
      <p>Discover curated spaces nearby.</p>

      <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12,marginTop:12}}>
        {samplePlaces.map(p=> (
          <div key={p.id} style={{padding:12,border:'1px solid #eee',borderRadius:8,background:'#fff'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <div style={{fontWeight:700}}>{p.title}</div>
                <div style={{color:'#666',fontSize:13}}>{p.desc}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontWeight:700}}>{p.price}</div>
                <div style={{fontSize:12,color:'#888'}}>per night</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{marginTop:18}}><Link href="/">Back to Offers</Link></p>
    </div>
  )
}
