import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" title="Home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" title="About">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
