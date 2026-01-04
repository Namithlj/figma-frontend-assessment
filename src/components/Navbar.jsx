export default function Navbar({ user, setUser }) {
  const handleClick = () => {
    // If user exists, sign out; otherwise do nothing (SignInBox handles sign in)
    if (user) setUser(null)
  }

  return (
    <header className="topbar">
      <div className="left">
        <img src="/logo.svg" alt="Spacez" className="logo" />
      </div>
      <div className="right">
        {/* intentionally empty to keep centered layout; sign-in handled in-page */}
      </div>
    </header>
  )
}
