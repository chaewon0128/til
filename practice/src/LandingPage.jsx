import React, { useState } from "react";
import Toolbar from "./Toolbar";

export default function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
   }
   const onClickLogout = () => {
    setIsLoggedIn(false)
}

   return (
    <>
    <Toolbar 
    isLoggedIn={isLoggedIn}
    onClickLogin={onClickLogin}
    onClickLogout={onClickLogout}/>
    <div>신나는 리액트 공부!</div>
    
    </>
   )
}

