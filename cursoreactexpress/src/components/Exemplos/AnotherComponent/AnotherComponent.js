const AnotherComponent = () => {

    const  handleClick = () => {
        console.log('Clickou no botão');
    };


    return(
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr />
            <button onClick={()=> console.log('teste')}>Evento dno Elemento</button>
            <hr />
        </div>
    );
}

export default AnotherComponent;