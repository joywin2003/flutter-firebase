import Cards from "../UI/Cards";
import Button from "../UI/Button";
function AddUser(props) {
    return (
            <Cards>
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
                <Button type="submit" message="Add User" />
            </form>
        </Cards>
    );
}

export default AddUser;