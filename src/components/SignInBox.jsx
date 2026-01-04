import { useState } from 'react'

export default function SignInBox({ user, setUser, showToast }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSignInClick = () => setOpen(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const u = { name: name || 'Guest User', email: email || '' }
    setUser(u)
    showToast('Signed in as ' + u.name)
    setOpen(false)
  }

  const handleSignOut = () => {
    setUser(null)
    showToast('Signed out')
  }

  if (user) {
    return (
      <div className="signin-box signed-in">
        <div className="signin-left">Welcome, <strong>{user.name}</strong></div>
        <div className="signin-right"><button className="unlock-btn" onClick={handleSignOut}>Sign out</button></div>
      </div>
    )
  }

  return (
    <>
      <div className="signin-box">
        <div className="signin-left">Sign in to unlock exclusive additional rewards</div>
        <div className="signin-right"><button className="signin-primary" onClick={handleSignInClick}>Sign in</button></div>
      </div>

      {open && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>Sign in</h3>
            <form onSubmit={handleSubmit}>
              <div className="field"><label>Name</label><input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" /></div>
              <div className="field"><label>Email</label><input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" /></div>
              <div style={{display:'flex',gap:8,justifyContent:'flex-end',marginTop:12}}>
                <button type="button" onClick={()=>setOpen(false)} className="btn-muted">Cancel</button>
                <button type="submit" className="signin-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
