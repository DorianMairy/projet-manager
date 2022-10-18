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
    const [projectImg, setProjectImg] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields]:any = useState([])


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const project = {title, description, repo, clientFirstName, clientLastName, clientNumber, projectStartDate, projectEndDate, projectState, projectImg}

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
            setEmptyFields(json.emptyFields)
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
            setProjectImg('')
            setError(null)
            setEmptyFields([])
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
            className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Description :</label>
            <input type="text" 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className={emptyFields.includes('description') ? 'error' : ''}
            />
            <label>Repo :</label>
            <input type="text" 
            onChange={(e) => setRepo(e.target.value)}
            value={repo}
            className={emptyFields.includes('repo') ? 'error' : ''}
            />
            <label>Client First Name :</label>
            <input type="text" 
            onChange={(e) => setClientFirstName(e.target.value)}
            value={clientFirstName}
            className={emptyFields.includes('clientFirstName') ? 'error' : ''}
            />
            <label>Client Last Name :</label>
            <input type="text" 
            onChange={(e) => setClientLastName(e.target.value)}
            value={clientLastName}
            className={emptyFields.includes('clientLastName') ? 'error' : ''}
            />
            <label>Client Phone Number :</label>
            <input type="text" 
            onChange={(e) => setClientNumber(e.target.value)}
            value={clientNumber}
            className={emptyFields.includes('clientNumber') ? 'error' : ''}
            />
            <label>Project Start Date :</label>
            <input type="text" 
            onChange={(e) => setProjectStartDate(e.target.value)}
            value={projectStartDate}
            className={emptyFields.includes('projectStartDate') ? 'error' : ''}
            />
            <label>Project End Date :</label>
            <input type="text" 
            onChange={(e) => setProjectEndDate(e.target.value)}
            value={projectEndDate}
            className={emptyFields.includes('projectEndDate') ? 'error' : ''}
            />
            <label>Project Statuts :</label>
            <input type="text" 
            onChange={(e) => setProjectState(e.target.value)}
            value={projectState}
            className={emptyFields.includes('projectState') ? 'error' : ''}
            />
            <label>Project Image :</label>
            <input type="file"
            accept='image'
            onChange={(e) => setProjectImg(e.target.value)}
            value={projectImg}
            />
            <button>Add Project</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default ProjectForm