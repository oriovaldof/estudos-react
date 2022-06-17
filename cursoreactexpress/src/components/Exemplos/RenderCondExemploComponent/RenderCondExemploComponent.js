import { useState } from "react";

export const RenderCondExemploComponentSimpes = ({x,y}) => {

    
    return(
        <div>
            <p>X = {x}</p>
            { x > 5 && <p>X é maior que 5</p>}
            { x > 5 ? <p>X é um numero auto</p> : <p>X é um numero baixo</p>}
            <p> O valor de Y é {y}</p>
            <hr />
        </div>
    );
};
;

export const RenderCondExemploComponent = ({v}) => {

    const [x , setX] = useState(v);

    const addX = () => {
        let v = x;
        v++;
        setX(v);
    }
    const diminuiX = () => {
        let v = x;
        v--;
        if(v < 0){
            v = 0;
        }
        setX(v);
    }
    // const x = 1;
    return(
        <div>
            <p>X = {x}</p>
            { x > 5 && <p>X é maior que 5</p>}
            { x > 5 ? <p>X é um numero auto</p> : <p>X é um numero baixo</p>}
            <button onClick={diminuiX}>-</button> | <button onClick={addX}>+</button>
            <hr />
        </div>
    );
}
// export default RenderCondExemploComponent;RenderCondExemploComponentSimpes;