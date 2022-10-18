// dependencies
import { useEffect, useState } from "react"

import "../scss/index.scss";

// components
import ProjectDetails from "../components/ProjectDetails"
import ProjectForm from "../components/ProjectForm";

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async  () => {
            const response = await fetch('/api/projects')
            const json = await response.json()

            if (response.ok) {
                setProjects(json)
            }
        }

        fetchProjects()
    }, []) 

    return (
        <div className="home">
            <div className="projects">
                {projects && projects.map((project: any) => (
                    <ProjectDetails key={project._id} project={project} children={undefined} />
                ))}
            </div>
            <ProjectForm />
        </div>
    )
}

export default Projects