import pinturaLua from "../../../assets/teste2.jpeg";

const ImagenComporent = () => {
    return(
        <div>
            <img src="./tes1.jpg" alt="Sol" />
            <hr />
            <img src={pinturaLua} alt="Pintura da Lua" />
            <hr />
        </div>
    );
};

export default ImagenComporent;