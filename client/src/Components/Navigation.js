import { React, useState} from 'react';
import { push as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import '../css/prefixed/Navigation.css';
function Navigation(props) {
    const [menuToggler, setMenuToggler] = useState(false);


    const toggleMenu = () => {
        setMenuToggler(!menuToggler);
    }



    return (
        <Menu  {...props} right isOpen={menuToggler} onOpen={ toggleMenu } onClose={ toggleMenu }>
            <Link to="/" onClick={toggleMenu}>About</Link>
            <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </Menu>
    )
}

export default Navigation;