import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth } from "./firebase-config";
import { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
const App = () => {
    const [isAuth, setIsAuth] = useState();
    // const [currentUser, setCurrentUSer] = useState(false);

    onAuthStateChanged(auth, (user) => {
        setIsAuth(user);
    });

    console.log(isAuth);
    const singUserOut = () => {
        signOut(auth).then((result) => {
            window.location.path = "/login";
        });
    };

    // useEffect(() => {
    //     setCurrentUSer(auth.currentUser);
    //     console.log(auth);
    // }, [auth]);

    return (
        <Router>
            <nav>
                <Link to="/Build-Blog-Web-Tutorial">Home</Link>
                <Link to="/createpost">Create Post</Link>
                {isAuth ? (
                    <button type="button" onClick={singUserOut}>
                        Log Out
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
            <Routes>
                <Route path="/Build-Blog-Web-Tutorial" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createpost" element={<CreatePost />} />
            </Routes>
        </Router>
    );
};

export default App;
