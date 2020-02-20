import React from 'react'

export const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id} </span>
                    <p>quia molestiae reprehenderit quasi 
                        aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis 
                        quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus 
                        et vero voluptates excepturi deleniti ratione</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;
