function AddUser() {
    return (
        <div className="flex-auto rounded-2xl border-2 border-red-500 bg-white container p-20 mx-auto">
          <form className="w-1/2">
            <label htmlFor="username" className="block m-2 font-semibold text-xl">Username</label>
            <input id="username" type="text" className="w-full p-2 border-2 border-black" />
            <label htmlFor="age" className="block m-2 font-semibold text-xl">Age(in years)</label>
            <input id="age" type="text" className="w-full p-2 border-2 border-black" />
          </form> 
        </div>
      );
}

export default AddUser;