import { useState, useEffect } from "react";

const HookExemploComponet = () => {
    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40);

    const changeAge = () => {
        // idade = 31;
        idade++;
        console.log(idade)
    }

    const changeNewAge = () => {
        let idade = novaIdade;
        idade++
        setNovaIdade(idade++);
    };

    useEffect(() => {
        console.log('Testando');
    });

    return (
        <div>
            <p>Idade:{idade}</p>
            <button onClick={changeAge}>Mudar Idade</button>

            <p>Nova Idade:{novaIdade}</p>
            <button onClick={changeNewAge}>Mudar Nova Idade</button>
            <hr />
        </div>
    );
}
export default HookExemploComponet;