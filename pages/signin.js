import Head from 'next/head'
import Link from 'next/link'
import SignInBox from '../src/components/SignInBox'

export default function SignIn({ user, setUser, showToast }){
  return (
    <div style={{padding:20}}>
      <Head>
        <title>Sign in — Spacez</title>
      </Head>
      <SignInBox user={user} setUser={setUser} showToast={showToast} />
      <p><Link href="/">Back to Offers</Link></p>
    </div>
  )
}
