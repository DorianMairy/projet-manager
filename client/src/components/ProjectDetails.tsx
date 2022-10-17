import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    project: any;
}
const ProjectDetails = ({ project }: Props) => {

    const handleClick = async () => {
        const response = await fetch('/api/projects/' + project._id, {
            method: 'DELETE',
        })
        const json = await response.json()

        if(response.ok) {
            console.log('Project deleted successfully', json)
        }
    }

    return (
        <div className="project-details">
        <h4>{project.title}</h4>
        <p><strong>Description : </strong>{project.description}</p>
        <p><strong>Repo : </strong>{project.repo}</p>
        <p><strong>Client First Name : </strong>{project.clientFirstName}</p>
        <p><strong>Client Last Name : </strong>{project.clientLastName}</p>
        <p><strong>Client Phone Number : </strong>{project.clientNumber}</p>
        <p><strong>Project Start Date : </strong>{project.projectStartDate}</p>
        <p><strong>Project End Date : </strong>{project.projectEndDate}</p>
        <p><strong>Project Statuts : </strong>{project.projectState}</p>
        <p>{project.projectImg}</p>
        <span onClick={handleClick}><i className="fa fa-trash fa-2x"></i></span>
        </div>
    )
}

export default ProjectDetails;