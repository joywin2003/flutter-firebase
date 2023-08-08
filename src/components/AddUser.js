function AddUser(props) {
    return (
        <div className="flex rounded-2xl border-2 border-red-500 bg-white container p-20 mx-auto mt-10 w-2/6">
            <form onSubmit={props.onSubmut} className="">
                <label
                    htmlFor="username"
                    className="block m-2 font-semibold text-xl">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    className="w-full p-2 border-2 border-black" 
                    value = {props.username}
                    onChange ={props.handleUsernameChange}
                    />
                <label
                    htmlFor="age"
                    className="block m-2 font-semibold text-xl">
                    Age(in years)
                </label>
                <input
                    id="age"
                    type="text"
                    className="w-full p-2 border-2 border-black" 
                    value = {props.age}
                    onChange = {props.handleAgeChange}
                    />
                <button
                    type="submit"
                    id="submit-btn"
                    className="bg-blue-700 border-2 rounded-xl my-2 p-2 text-white text-lg w-60">
                    Add user
                </button>
            </form>
        </div>
    );
}

export default AddUser;