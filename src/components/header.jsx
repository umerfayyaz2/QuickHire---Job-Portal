import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
   <>
    <nav className='py-4 flex justify-between items-center'>
    <Link>
    <img src="/public/logo.png" alt="website logo" className='h-20' />
    </Link>

    <Button variant="outline">Login</Button>

    {/* If the user is sign-out they will see the sign in button
    <SignedOut>
        <SignInButton />
      </SignedOut>
    {/* If the user is sign-in they will see the sign-in button */}
      {/* <SignedIn>
        <UserButton />
      </SignedIn> */}

    </nav>
   </>
  )
}

export default Header