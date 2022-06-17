const ListExemploComponent = () => {
    const items = [
        {
            id: 1,
            name: "Ori"
        },
        {
            id: 2,
            name: "Neia"
        },
        {
            id: 3,
            name: "João Pedro"
        }
    ];


    return (
        <div>
            {items.map((item)=>(
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
            <hr />
        </div>
    );
};
export default ListExemploComponent;