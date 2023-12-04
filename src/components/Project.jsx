
function Project(props){
    <div className="card">
        <img src={props.image} alt="" />
        <div className="card-body">
            <h3>{props.title}</h3>
            <a href={props.link}>Deployed Link</a>
            <a href={props.repoLink}>Github Repo</a>
        </div>
    </div>
}

export default Project