import { useState } from 'react';

const ProjectForm = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [repo, setRepo] = useState("")
    const [clientFirstName, setClientFirstName] = useState("")
    const [clientLastName, setClientLastName] = useState("")
    const [clientNumber, setClientNumber] = useState("")
    const [projectStartDate, setProjectStartDate] = useState("")
    const [projectEndDate, setProjectEndDate] = useState("")
    const [projectState, setProjectState] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const project = {title, description, repo, clientFirstName, clientLastName, clientNumber, projectStartDate, projectEndDate, projectState}

        const response = await fetch('/api/projects', {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'content-type': 'application/json',
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setDescription('')
            setRepo('')
            setClientFirstName('')
            setClientLastName('')
            setClientNumber('')
            setProjectStartDate('')
            setProjectEndDate('')
            setProjectState('')
            setError(null)
            console.log('new project added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add Project</h3>
            <label>Title :</label>
            <input type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            <label>Description :</label>
            <input type="text" 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />
            <label>Repo :</label>
            <input type="text" 
            onChange={(e) => setRepo(e.target.value)}
            value={repo}
            />
            <label>Client First Name :</label>
            <input type="text" 
            onChange={(e) => setClientFirstName(e.target.value)}
            value={clientFirstName}
            />
            <label>Client Last Name :</label>
            <input type="text" 
            onChange={(e) => setClientLastName(e.target.value)}
            value={clientLastName}
            />
            <label>Client Phone Number :</label>
            <input type="text" 
            onChange={(e) => setClientNumber(e.target.value)}
            value={clientNumber}
            />
            <label>Project Start Date :</label>
            <input type="text" 
            onChange={(e) => setProjectStartDate(e.target.value)}
            value={projectStartDate}
            />
            <label>Project End Date :</label>
            <input type="text" 
            onChange={(e) => setProjectEndDate(e.target.value)}
            value={projectEndDate}
            />
            <label>Project Statuts :</label>
            <input type="text" 
            onChange={(e) => setProjectState(e.target.value)}
            value={projectState}
            />
            <button>Add Project</button>
        </form>
    )
}

export default ProjectForm