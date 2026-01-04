import Head from 'next/head'
import { useState } from 'react'
import OfferCard from '../src/components/OfferCard'
import SignInBox from '../src/components/SignInBox'

const offers = [
  {
    id: 'longstay',
    title: 'LONGSTAY',
    subtitle: 'Save up to 15% on 7+ nights',
    tag: '₹1,500',
    type: 'coupon',
    code: 'LONGSTAY'
  },
  {
    id: 'earlybird',
    title: 'EARLYBIRD',
    subtitle: 'Save 10% on early bookings',
    tag: 'Flat 10%',
    type: 'coupon',
    code: 'EARLYBIRD'
  },
  {
    id: 'rushdeal',
    title: 'RUSHDEAL',
    subtitle: 'Limited time deal',
    tag: '₹3,000',
    type: 'coupon',
    code: 'RUSHDEAL'
  }
]

const giftcards = [
  { id: 'g1', title: 'MYNTRA', subtitle: 'Get this gift voucher on booking above ₹2500', tag: '₹1500', type: 'giftcard' },
  { id: 'g2', title: 'HAMMER', subtitle: 'Get this gift voucher on booking above ₹1500', tag: '₹1000', type: 'giftcard' }
]

const paymentOffers = [
  { id: 'p1', title: 'HDFC BANK', subtitle: 'Get 10% off on booking above ₹1500', tag: '10% OFF', type: 'payment' }
]

export default function Home({ showToast, user, setUser }) {
  const [tab, setTab] = useState('coupons')

  return (
    <div className="page-root">
      <Head>
        <title>Offers — Spacez</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>


      <main className="container">
        <SignInBox user={user} setUser={setUser} showToast={showToast} />
        <h1 className="page-title">Offers</h1>
        <p className="page-sub">Book directly with us to get exclusive benefits</p>

        <div className="tabs">
          <button className={`tab ${tab==='coupons'?'active':''}`} onClick={()=>setTab('coupons')}>Coupons</button>
          <button className={`tab ${tab==='giftcards'?'active':''}`} onClick={()=>setTab('giftcards')}>Giftcards</button>
          <button className={`tab ${tab==='payment'?'active':''}`} onClick={()=>setTab('payment')}>Payment Offers</button>
        </div>

        <section className="offers-list">
          {tab === 'coupons' && offers.map((o) => (
            <OfferCard key={o.id} offer={o} signedIn={!!user} onAction={(msg) => showToast(msg)} />
          ))}

          {tab === 'giftcards' && giftcards.map((o) => (
            <OfferCard key={o.id} offer={o} signedIn={!!user} onAction={(msg) => showToast(msg)} />
          ))}

          {tab === 'payment' && paymentOffers.map((o) => (
            <OfferCard key={o.id} offer={o} signedIn={!!user} onAction={(msg) => showToast(msg)} />
          ))}
        </section>

        <section className="bonus-cards">
          <div className="bonus">
            <div className="bonus-left">Bonus gift cards</div>
            <div className="bonus-right">Collect vouchers up to ₹1000</div>
          </div>
        </section>

        <footer className="bottom-actions">
          <button className="unlock-btn" onClick={() => showToast('Offers unlocked')}>Unlock offers</button>
        </footer>
      
      </main>
    </div>
  )
}
