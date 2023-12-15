import { Github } from "react-bootstrap-icons"
import { Linkedin } from "react-bootstrap-icons"

function Footer () {
    return(
    <footer className="sticky-bottom">
        <div className="d-flex justify-content-center gap-3"> 
            <a href="https://github.com/AlexLenson"><Github size={25} color="black"/></a>
                <a href="https://www.linkedin.com/in/mark-lenson/"><Linkedin size={25} color="black"/></a>
        </div>
    </footer>
    )
}

export default Footer;