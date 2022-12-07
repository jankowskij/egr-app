import App from "./App";
import { connect } from "react-redux";
import { setActiveLogin, setNoActiveLogin } from "../../redux/reducers/authReducer";



const mapStateToProps = (state) => {
    return {
        content: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (data) => {
            dispatch(setActiveLogin(data));
        },
        setNoActive: (data) => {
            dispatch(setNoActiveLogin(data));
        }
    }
}


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;