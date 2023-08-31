import React from 'react'

const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2>{name}</h2>
        <ul>
            <li>Idade: {age}</li>
            <li>Profissão: {job}</li>
            {age >= 18 ? (
                <p>Já tem idade suficiente para carteira de habilitação</p>
            ) : (
                <p>Ainda não tem idade suficiente para carteira de habilitação</p>
            )}
        </ul>
    </div>
  )
}

export default UserDetails