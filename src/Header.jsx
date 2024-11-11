
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>My App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/page1">Page1</Link>
                <Link to="/page2">Page2</Link>
                <Link to="/page3">Page3</Link>
                <Link to="/goback">GoBackButton</Link>
            </nav>
        </header>
    );
};

export default Header;
