import React from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='projects'>
            <Link to="/projectslist" className="text-blue-600 underline">
                All Projects
            </Link>
        </div>
    )
}

export default Projects