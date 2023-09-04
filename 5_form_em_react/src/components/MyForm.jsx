import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - Controlled inputs
    // 3 - Grenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Digite seu nome'
                    onChange={handleName}
                    value={name}
                />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite o seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                 />
            </label>
            <input type="submit" value="Enviar" />
            
        </form>
    </div>
  )
}

export default MyForm