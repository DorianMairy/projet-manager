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
                <Link to="/projects">
                    Projects
                </Link>
                <Link to="/signup">
                    Sign up
                </Link>
                <Link to="/login">
                    Log in
                </Link>
            </div>
        </header>
    )
}

export default Navbar