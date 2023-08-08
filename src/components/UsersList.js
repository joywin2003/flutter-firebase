function UsersList(props) {
    return (
        <div className="flex flex-col mt-10 w-2/6 h-2/5 bg-white rounded-lg p-6 text-black">
            {props.users.map((item, index) => {
                console.log('item:', item);
                return <p className="p-2 m-2 border border-solid rounded-xl" key={index}>{item}</p>;
            })}
        </div>
    )
}

export default UsersList;