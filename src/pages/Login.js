import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="loginPage">
            <p> Sign In With Google to Continue</p>
            <button
                type="button"
                className="login-with-google-btn"
                onClick={signInWithGoogle}
            >
                Sign In With Google
            </button>
        </div>
    );
}

export default Login;
