import { createContext } from "react";

export const ProjectsContext = createContext()

export const ProjectsContextProvider = ({ children }) => {
        

    return (
        <ProjectsContext.Provider value={}>
            { children }
        </ProjectsContext.Provider>
    )
}