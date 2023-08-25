import React from "react";

const Challenge = () => {
    let n1 = 35;
    let n2 = 20;

    return (
        <div>
            <div>
               <p>Os numeros são {n1} e {n2}</p> 
                <button onClick={() => {console.log( n1 + n2 )}}>Somar</button>
            </div>
            <div>
                
            </div>
        </div>
        
    )
};

export default Challenge;
