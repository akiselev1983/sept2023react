import React from 'react';

import css from './Header.module.css'
import {useAppContext} from "../../hoc";

const Header = () => {
    const [name, ] = useAppContext()
    return (
        <div className={css.Header}>
            {
                name?
                    <div>{name}</div>
                    :
                    <h1>Rick & Morty</h1>
            }

        </div>
    );
};

export default Header;