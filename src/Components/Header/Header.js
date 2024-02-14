import React from 'react';
import css from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={'/todos'}>TODOS</Link>
            <Link to={'/albums'}>ALBUMS</Link>
            <Link to={'/comments'}>COMMENTS</Link>
        </div>
    );
};

export default Header;