import Button from "../UI/Button";
import Cards from "../UI/Cards";
function ErrorModal(props) {
    return (
        <div className="fixed inset-0 flex items-center justify-center h-full w-full z-10 bg-black-rgba">
            <div className="flex flex-col p-4 m-2 border-2 rounded-xl text-center bg-white">
                <header className="text-xl bg-blue-700 text-white p-2">
                    {props.title}
                </header>
                <p className="p-2">{props.message}</p>
                <footer className="p-2">
                    <Button message="Okay" />
                </footer>
            </div>
        </div>
    )
}
export default ErrorModal;