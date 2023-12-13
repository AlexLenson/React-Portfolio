
function Project(props){
    return (

    <div className="card" style={{ width: "30vw", height: "35vh"}}>
            <img src={props.image} alt="" style={{ width: "29vw", height: "15vh" }} />
        <div className="card-body">
            <h3>{props.title}</h3>
            <a href={props.link}>Deployed Link</a>
            <a href={props.repoLink}>Github Repo</a>
        </div>
    </div>
    
    )
}

export default Project