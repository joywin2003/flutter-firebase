function Button(props) {
    return(
    <button
        type={props.type || "button"}
        id="submit-btn"
        onClick={props.onClick}
        className={`${props.className} bg-blue-700 border-2 rounded-xl my-2 p-2 text-white text-lg w-60`}>
        {props.message}
        
    </button>
    );
}

export default Button;