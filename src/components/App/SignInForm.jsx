


const SignInForm = (props) => {
    return (
        <div className="containerForm">
            <div className="form">
                <div onClick={props.setNoActive}>Close</div>
            </div>
        </div>
    )
}

export default SignInForm;