import React, { useState } from 'react'

const SignUp = () => {

    const [email, setEmail] =useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSignUp = (e) =>{
        e.preventDefault()
    }
  return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
            <input type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            
            <input type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            
            <input type="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => set(e.target.value)}
                required />

            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp