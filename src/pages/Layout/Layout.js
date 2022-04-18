import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from "../../App.module.css";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/'}></NavLink>
                <NavLink to={'/users'}><button>Users</button></NavLink>
                <NavLink to={'/posts'}><button>Posts</button></NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>

    );

};

export {Layout};