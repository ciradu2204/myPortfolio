import  ProjectsHome from "../../components/Projects/index";
import { ProjectsHeader, ProjectsIntro } from "./ProjectsElements";


const Projects = () => {

    return (

         <>
         <ProjectsHeader>Projects</ProjectsHeader>
         <ProjectsIntro>The following are different projects I built using JavaScript, React, Redux, TypeScript, CSS, HTML, and different CSS frameworks such as TailwindCSS and Material UI. The projects are categorized into Personal projects, Group projects which I developed through different programs and online courses, and Open source project I have contributed to.</ProjectsIntro>
         <ProjectsHome/>
         </>
    )
}

export default Projects;