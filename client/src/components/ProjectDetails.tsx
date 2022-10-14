import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    project: any;
}
const ProjectDetails = ({ project }: Props) => {
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
        </div>
    )
}

export default ProjectDetails;