import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ProjectsList = () => {
    return (
        <>
            <Navbar />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">All Projects</h1>
                {/* Add your project list items here */}
            </div>
            <Footer />
        </>
    )
}

export default ProjectsList