
function Button (props) {
    return (
        <div><button onClick={props.function} value={props.buttonName}> {props.buttonName}</button></div>
    )
}

export default Button;