import { useContext } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { UserLoginContext } from '../Context/UserLoginContext';
import google from '../../img/google.png';
import persona from '../../img/persona.png';
import firebase from "firebase/app";
import firebaseConfig from '../FireBase/FireBaseConfig';
import './Login.css';
import "firebase/auth";


//############################################################
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
//############################################################

const Login = () => {
    document.title = 'Login';

    const { setLoginUser } = useContext(UserLoginContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const { role } = useParams();
    console.log(role);

    const storeUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(error => {
            console.log("From Token ", error)
        });
    }

    const handleLogin = () => {


        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(result => {
                // Get User Needful Info...
                const { displayName, email, photoURL } = result.user;
                //console.log(result.user);

                // creating a new object...
                const signInUser = {
                    name: displayName,
                    email,
                    photo: photoURL,
                }
                //console.log(signInUser);

                storeUserToken();
                setLoginUser(signInUser);
                history.replace(from);

            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container">

            <div className="logo">
                <Link to="/">
                    <img src={persona} alt="" />
                </Link>
            </div>

            <div className="login_area">
                <h2>Login</h2>

                <div className="with_google" onClick={handleLogin}>
                    <img src={google} alt="" />
                    <div>
                        <p>Continue with Google</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;