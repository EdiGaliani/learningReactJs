import React from "react";

const name = "EDI GALIANI";
const data = {
    age: 41,
    job: "Developer"
};

const TemplateExpressions = () => {
    return (
        <div>
            <h1>Olá {name}, seja bem vindo!</h1>
            <h2>Você atua como {data.job}.</h2>
            <h2>E sua idade é de {data.age} anos</h2>
        </div>
    )
}

export default TemplateExpressions;