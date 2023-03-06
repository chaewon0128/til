import React, { useState } from "react";

export default function SignUp (props) {
    const [name, setName] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.name)
    }
    const handleSubmit = (e) => {
        alert(`이름 : ${name}`)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>이름 :
            <input type="text" value={name} onChange={handleChangeName} /></label>
            <button type="submit">제출</button>
        </form>
    )


}