import React, { useContext, useRef, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import login from '../functions/login'
import ShowHideEye from '../../../../components/ShowHideEye'
import { MainContext } from '../../../contexts/mainContext'


export default function Login({ setPath }) {
    const {setUser}=useContext(MainContext)
    const lPassword = useRef(null)
    const [lInps, setLInps] = useState({});
    const inputChange = (e) => {
        setLInps(prev => {
            return { ...prev, [e.target.id]: e.target.value }

        })
    }

    return (
        <div className='loginPageContainer d_flx jc_sb flxW'>
            <form action="" id='loginForm'>
                <div>
                    <label className='loginPageInputLabels' htmlFor="loginEmail" >Email</label>
                    <input className='loginPageInput' id='loginEmail' type="Email" onChange={(e) => inputChange(e)} />
                </div>
                <div>
                    <label className='loginPageInputLabels' htmlFor="loginPassword">Password</label>
                    <div className='d_flx '>
                        <input className='loginPageInput' type="Password" id='loginPassword' ref={lPassword} onChange={(e) => inputChange(e)} />
                        <ShowHideEye inp={lPassword} />
                    </div>
                </div>
                <div className='d_flx jc_sb'>
                    <label className='loginPageInputLabels' htmlFor="RemberCheckBox">Remember Me</label>
                    <input className='' type="CheckBox" id='RememberCheckBox'
                        onChange={(e) => setLInps(prev => { return { ...prev, [e.target.id]: e.target.checked } })} />
                </div>
                <input className='loginPageInput' type="text" style={{ display: 'none' }} />
                <div className='d_flx jc_c'>
                    <button id='submitLoginBtn' onClick={(e)=>login(e,{lInps,setUser})}>Login</button>
                </div>
            </form>
            <div className='d_flx ai_c flxW jc_c tac'>
                <div>
                    <label className='d_blk DontHaveAccountLink'>Don't Have An Account</label>
                    <Link to='register' className='d_blk'>
                        <button onClick={() => { setPath('register') }} id='signUpPageLink'>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
