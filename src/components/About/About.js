import React from 'react';
import { Link } from 'react-router-dom';

export default function( props ) {
    return (
        <div>
            <nav>
                <Link to='/about/history' >History</Link>
                <Link to='/about/contact' >Contact</Link>
            </nav>
            { props.children }
        </div>
    )
    
}