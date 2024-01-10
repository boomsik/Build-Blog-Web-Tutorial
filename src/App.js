import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase-config";
import { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
const App = () => {
    const [isAuth, setIsAuth] = useState();

    onAuthStateChanged(auth, (user) => {
        setIsAuth(user);
    });

    console.log(isAuth);
    const singUserOut = () => {
        signOut(auth).then((result) => {
            window.location.path = "/login";
        });
    };

    return (
        <HashRouter>
            <nav>
                <Link to="/">Home</Link>

                {isAuth ? (
                    <>
                        <Link to="/createpost">Create Post</Link>
                        <button
                            type="button"
                            className="btn-new"
                            onClick={singUserOut}
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
            <Routes>
                <Route path="/" element={<Home isAuth={isAuth} />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/createpost"
                    element={<CreatePost isAuth={isAuth} />}
                />
            </Routes>
        </HashRouter>
    );
};

export default App;
