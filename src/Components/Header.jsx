import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Header = () => {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate("./")
    }
    const navigateProyects = () => {
        navigate("./proyects")
    }
    const navigateAbout = () => {
        navigate("./about")
    }
    const navigateContact = () => {
        navigate("./contact")
    }
  return (
    <header>
        <nav className='navBar'>
            <div className='container'>
                <div className='li-item' onClick={navigateHome}>
                    <h3>Home</h3>
                    <div className='line'></div>
                </div>
                <div className='container-buttons'>
                    <ul className='buttons-list'>
                        <li className='li-item' onClick={navigateAbout}>
                            <h3>About</h3>
                            <div className='line'></div>
                        </li>
                        <li className='li-item' onClick={navigateProyects}>
                            <h3 >Proyects</h3>
                            <div className='line'></div>
                        </li>  
                        <li className='li-item' onClick={navigateContact}>
                            <h3 >Contact</h3>
                            <div className='line'></div>
                        </li>                 
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
