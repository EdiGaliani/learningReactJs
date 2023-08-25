import React from "react";

const Events = () => {

    const handleMyEvent = (e) => {
        console.log("Você Clicou")
        console.log(e)
    }
    
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => { console.log("Clicou")}}>Clique aqui novamente</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true) {
                        console.log("Nunca faça assim")
                    }
                }}>Clique aqui novamente denovo</button>
            </div>
        </div>
    )
}

export default Events; 