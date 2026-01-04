import { useState } from 'react'

export default function OfferCard({ offer, onAction, signedIn = false }) {
  const [collected, setCollected] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (offer.code) {
        await navigator.clipboard.writeText(offer.code)
        setCopied(true)
        onAction && onAction(`${offer.code} copied to clipboard`)
        setTimeout(() => setCopied(false), 1800)
      }
    } catch (e) {
      onAction && onAction('Copy failed')
    }
  }

  const handleCollect = () => {
    if (!signedIn) {
      onAction && onAction('Please sign in to collect offers')
      return
    }
    setCollected(true)
    onAction && onAction('Offer collected')
  }

  return (
    <div className={`card ${offer.type || 'coupon'}`}>
      <div className="card-left">
        {offer.type === 'coupon' && (
          <div className="vertical-tag">
            <div className="tag-value">{offer.tag}</div>
          </div>
        )}

        {offer.type === 'giftcard' && (
          <div className="gift-left">{offer.tag}</div>
        )}

        {offer.type === 'payment' && (
          <div className="payment-left">{offer.tag}</div>
        )}
      </div>

      <div className="card-middle">
        <div className="title">{offer.title}</div>
        <div className="subtitle">{offer.subtitle}</div>
        <div className="readmore">Read more</div>
      </div>

      <div className="card-right">
        {offer.type === 'coupon' && (
          <>
            <button className="copy-btn" onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
            <button className="collect-btn" onClick={handleCollect} disabled={collected}>{collected ? 'Collected' : (signedIn ? 'Collect' : 'Sign in')}</button>
          </>
        )}

        {offer.type === 'giftcard' && (
          <>
            <button className="collect-btn" onClick={handleCollect} disabled={collected}>{collected ? 'Collected' : 'Collect'}</button>
          </>
        )}

        {offer.type === 'payment' && (
          <>
            <button className="collect-btn" onClick={handleCollect}>{'View'}</button>
          </>
        )}
      </div>
    </div>
  )
}
