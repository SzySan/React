import React, { useState } from 'react'
import './Login.css'

 const Login = ({setShowLogin}) => {

    const [nowState,setNowState] = useState("Zarejestruj Się")
  return (
    <div className='login-window'>
        <form className='login-window-container'>
            <div className='login-window-title'>
                <h2>{nowState}</h2>
                <svg onClick={()=>setShowLogin(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
            <div className='login-window-input'>
                {nowState==="Login"?<></>:<input type="text" placeholder='Podaj Swoje Imie' required/>}
                <input type="email" placeholder='Podaj Swój Email' required/>
                <input type="password" placeholder='Podaj Hasło' required/>
            </div>
            <button>{nowState==="Zarejestruj Się"?"Swórz Konto":"Zaloguj Się"}</button>
            {nowState==="Login"
            ?<p>Stwórz Nowe Konto<span onClick={()=>setNowState("Zarejestruj Się")}> Kliknij Tutaj</span></p>
            :<p>Masz już konto?  <span onClick={()=>setNowState("Login")}>Zaloguj Się Tutaj</span></p>
            }
            
        </form>
    </div>
  )
}
export default Login
