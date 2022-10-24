import React from 'react';
import {Routes, Route, Link, Outlet} from 'react-router-dom';

const Layout = props => {
    return (
        <div>
            <h1>welcome to the app!</h1>
            <div className="content">
                <Outlet/>
            </div>

        </div>
    )
}
export default Layout;
