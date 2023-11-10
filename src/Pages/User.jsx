import React from 'react'

const User = () => {
  return (
    <div className='fade-in user w-full flex justify-center pt-10'>
    <form className="form2">
    <p className="title2">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input"/>
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" className="input"/>
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
    </div>
  )
}

export default User