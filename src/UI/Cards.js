function Cards(props) {
    return (
        <div className={`${props.className} flex flex-col mt-10 w-2/6 h-2/5 bg-white rounded-lg p-6 text-black`}>
            {props.children}
        </div>
    )
}
export default Cards;