import React, { useState } from 'react'

const ListRender = () => {
    const [List] = useState(["Matheus", "Pedro", "Josias", "Maria"]);
    const [users] = useState([
        {id: 1, name: "Matheus", age: 36},
        {id: 2, name: "Pedro", age: 58},
        {id: 3, name: "Josias", age: 14},
        {id: 4, name: "Maria", age: 24}

    ])
  return (
    <div>
        <ul>
            {List.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender