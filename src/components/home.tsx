import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>React Components</h1>
            <nav>
                <ul>
                    <li><Link to="/calendar">Calendar Input Component</Link></li>
                    <li><Link to="/infinite">Infinite Scroll Example</Link></li>
                </ul>
            </nav>
        </div>    
    )
}

export default Home