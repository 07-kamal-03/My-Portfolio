import React from 'react'
import '../css/Professional.css'

export const Professional = ({ theme }) => {
    return (
        <div className={`professional-container ${theme}`}>
            <div className='experience'>
                <table>
                    <thead>
                        <th colSpan={2} className={`${theme}`}>Experience</th>
                    </thead>
                    <tr>
                        <td>Company</td>
                        <td>Mooraft Innovation Labs (Acquired by UST)</td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>Software Developer</td>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td>2023-2024</td>
                    </tr>
                    <tr>
                        <td>Job Title</td>
                        <td>Internship</td>
                    </tr>
                </table>
            </div>
            <div className='professional-project'>
                <table>
                    <thead>
                        <th colSpan={3} className={`${theme}`}>Professional Projects</th>
                    </thead>
                    <tr>
                        <td>Project-I</td>
                        <td className='project-description'><i><b>UST HealthProof</b></i> helps client health plans across the
                            country drive down costs and deliver results across core
                            administration and clinical operations. I contribute to CMS
                            and UI development and gained skills of team work, problem
                            solving and front end skills.</td>
                        <td>Drupal&UI</td>
                    </tr>
                    <tr>
                        <td>Project-II</td>
                        <td className='project-description'><i><b>Aptia</b></i> is a trusted provider of pension and employee
                            benefits administration services, with offices in the U.S.
                            and U.K. I contribute to CMS and UI development and
                            gained skills of adaptability, analyze the source and
                            debugging, short time to complete the progress and front
                            end skills.</td>
                        <td>Drupal&UI</td>
                    </tr>
                </table>
            </div>
            <div className='Personal-project'>
                <table>
                    <thead>
                        <th colSpan={3} className={`${theme}`}>Personal Projects</th>
                    </thead>
                    <tr>
                        <td>Project-I</td>
                        <td className='project-description'><i><b>My Portfolio</b></i>, a responsive personal website using React.js
                            to showcase my skills, portfolio, and professional journey. The site is optimized
                            for all devices, featuring a dynamic layout that adapts to various screen sizes.
                            Utilized React components for efficient content rendering and state management to
                            enhance user experience. Focused on modern design principles, ensuring an intuitive,
                            visually appealing interface. Key sections include an overview of my projects, work experience,
                            and contact information. Deployed via GitHub Pages for easy access and sharing.</td>
                        <td>ReactJS</td>
                    </tr>
                    <tr>
                        <td>Project-II</td>
                        <td className='project-description'><i><b>Weather Project</b></i> developed a dynamic weather application using React.js,
                            integrating a weather API to provide real-time weather data. The app allows
                            users to search for weather conditions by city, displaying temperature, humidity,
                            wind speed, and forecasts. Implemented responsive design for seamless functionality
                            across devices and optimized API handling to ensure efficient data fetching and minimal
                            load times. The project focused on React's component-based architecture, state management,
                            and API integration, with deployment facilitated through GitHub and Netlify Pages.</td>
                        <td>ReactJS</td>
                    </tr>
                    <tr>
                        <td>Project-III</td>
                        <td className='project-description'><i><b>Currency converter Project</b></i> built a responsive currency converter application using React.js and a third-party
                            currency converter API. The app provides real-time conversion rates for various currencies,
                            allowing users to select their desired input and output currencies. Utilized React's state
                            management and API integration to dynamically fetch and display conversion data. Ensured
                            optimal user experience with a clean UI, responsive layout, and fast data retrieval.
                            Deployed the project through GitHub Pages for easy access.</td>
                        <td>ReactJS</td>
                    </tr>

                </table>
            </div>
            <div className='engineering-project'>
                <table>
                    <thead>
                        <th colSpan={2} className={`${theme}`}>Engineering Projects</th>
                    </thead>
                    <tr>
                        <td>Project-I</td>
                        <td className='project-description'><i><b>Fully Automated Solar Grass Cutter</b></i> in this project fully automated grass cutting robotic vehicle
                            powered by solar energy that also avoids obstacles and is
                            capable of fully automated grass cutting without the need of any
                            human interaction.</td>
                    </tr>
                    <tr>
                        <td>Project-II</td>
                        <td className='project-description'><i><b>Arduino Based IR Sensor And Manual Home Automation</b></i> in this project, we will control the home appliances by the
                            remote using this wireless communication technique.
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}
