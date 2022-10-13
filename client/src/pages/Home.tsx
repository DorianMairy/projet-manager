import { useEffect, useState } from "react"

const Home = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async  () => {
            const response = await fetch('http://localhost:5000/api/projects')
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
                    <p key={project._id}>{project.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home