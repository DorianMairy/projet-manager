// dependencies
import { Link } from 'react-router-dom' 
import "../scss/index.scss";

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Project Manager</h1>
                </Link>
                <Link to="/register">
                    <h5>Register</h5>
                </Link>
                <Link to="/login">
                    <h5>Login</h5>
                </Link>
            </div>
        </header>
    )
}

export default Navbar