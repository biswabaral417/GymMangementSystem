import React from 'react'
import Nav from './Nav'
import './nav.css'
import './nav.mobile.css'
import showDD from './functions/showDD'
import img from './images/barbelFitness.svg'


export default function NavContainer() {

    



    return (
            <header className='navHeader'>
                <div>
                    <div className='DDcontainer'>
                        <button
                            id="NavDropDownBtn"
                            className="showNavDD"
                            onClick={showDD}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 14 14">
                                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                        <Nav />
                    </div>
                    <div className='GymBannerContainer'>
                        <img
                            id="GymBanner"
                            src={img}
                            alt="Logo"
                        />
                    </div>
                </div>
            </header>
    )
}
