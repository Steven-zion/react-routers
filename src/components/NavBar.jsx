import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Steve Eats
            </Link>
            <ul>
                <li>
                    <CustomLink to="/popular">Popular Dishes</CustomLink>
                </li>
                <li>
                    <CustomLink to="/reviews">Customer Reviews</CustomLink>
                </li>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
