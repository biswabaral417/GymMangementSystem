import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import { useState } from 'react'
import ShowHideEye from '../../../../components/ShowHideEye'
import { useRef } from 'react'
import signUp from '../functions/signUp'


export default function Register({ setPath }) {
  const [regInps, setRegInps] = useState({})
  const changeRegInps = (e) => {
    setRegInps(prev => {
      return { ...prev, [e.target.id]: e.target.value }
    })

  }
  const password = useRef(null)
  const confirmPassword = useRef(null)
  return (
    <div className='registerContainer'>
      {/* <div className='RegisterPageContainer d_flx jc_sb flxW'> */}
      <form action="" className='  ' id='RegisterForm'>
        <div className='d_flx jc_se  flxW'>
          <div>
            <label className='signUpInputLabel' htmlFor="signUpName">Name</label>
            <input className='signUpPageInput' id='signUpName' type="text" onChange={changeRegInps} />
          </div>
          <div>
            <label className='signUpInputLabel' htmlFor="signUpAddress" >Address</label>
            <input className='signUpPageInput' id='signUpAddress' type="text" onChange={changeRegInps} />
          </div>
          <div>
            <label className='signUpInputLabel' htmlFor="signUpPhone" >phone</label>
            <input className='signUpPageInput' id='signUpPhone' type="phone" onChange={changeRegInps} />
          </div>
          <div>
            <label className='signUpInputLabel' htmlFor="signUpEmail" >Email</label>
            <input className='signUpPageInput' id='signUpEmail' type="Email" onChange={changeRegInps} />
          </div>
          <div>
            <label className='signUpInputLabel' htmlFor="signUpPassword">Password</label>
            <input className='signUpPageInput' ref={password} type="Password" id='signUpPassword' onChange={changeRegInps} />
          </div>
          <div>
            <label className='signUpInputLabel' htmlFor="signUpCPassword">Confirm password</label>
            <div className='d_flx jc_c '>
              <input className='signUpPageInput' ref={confirmPassword} type="Password" id='signUpCPassword' onChange={changeRegInps} />
              <ShowHideEye inp={confirmPassword} inp2={password} />
            </div>
          </div>
        </div>
        <div className='d_flx jc_se'>
          <label className='signUpInputLabel' htmlFor="termsAndConditionsCheckBox">Agree to <a href="/termsandconditions"> terms and conditions </a></label>
          <input className='' type="CheckBox" id='termsAndConditionsCheckBox'
            onChange={(e) => (prev => { return { ...prev, [e.target.id]: e.target.checked } })} />
        </div>
        <input className='signUpPageInput' type="text" style={{ display: 'none' }} />
        <div className='d_flx jc_c'>
          <button id='submitSignUpBtn' onClick={(e) =>signUp(e,{regInps})}>signUp</button>
        </div>
      </form>
      <div className='d_flx ai_c flxW jc_c tac'>
        <div>
          <label className='d_blk HaveAccountLink'>Already Have An Account?</label>
          <Link to='/user/login' className='d_blk'>
            <button onClick={() => { setPath('signUp') }} id='loginPageLinkBtn'>Login</button>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  )
}
