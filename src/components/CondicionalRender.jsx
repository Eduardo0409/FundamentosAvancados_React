import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Rafael")

    return (
        <div>
            <h1>Isso sera exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso!</p>}
            <h1>If Ternario</h1>
            {name === "Eduardo" ? (
                <div>
                    <p>O nome do usuario é Eduardo.</p>
                </div>
            ) : (
                <div>
                    <p>O nome do usuario não é Eduardo.</p>
                </div>
            )}
            <button onClick={() => setName("Eduardo") }>Clique aqui!</button>
        </div>
    );
};

export default CondicionalRender