import Cards from "../UI/Cards";

function UsersList(props) {
    return (
        <Cards>
        {props.users.map((item, index) => {
                console.log('item:', item);
                return <p className="p-2 m-2 border-black border-solid rounded-xl border-2" key={index}>{item}</p>;
            })}
        </Cards>
    )
}

export default UsersList;