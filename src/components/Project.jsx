
function Project(props){
    return (

    <div className="card" style={{ width: "30vw", height: "41vh"}}>
            <img src={props.image} alt="" style={{ width: "29vw", height: "29vh" }} />
        <div className="card-body">
            <h3>{props.title}</h3>
                {props.link && (
                    <div>
                        <a href={props.link}>Deployed Link</a>
                    </div>
                )}
                {props.repoLink && (
                    <div>
                        <a href={props.repoLink}>Github Repo</a>
                    </div>
                )}
        </div>
    </div>
    
    )
}

export default Project