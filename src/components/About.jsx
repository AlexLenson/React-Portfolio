// import profile_pic from '../assets/bootcamp_profile_picture.jpg'
import profile_pic from '../assets/bowtie-cat.png'
function About(){
    return(
        <div className='about card'>
            <h1 className='text-center'>About Me</h1>
            <div className="card-body  d-flex justify-content-center">
                <img src={profile_pic} alt="" />
                <p>Hello and welcome to my Portfolio page! My name is Alex Lenson, and I am an aspiring web devleoper. On this page you can find my current projects, as well as future projects coming soon. These projects serve as a learning tool to help develop my skills in various web development technologies.</p>
                <p>I have worked in the aerospace engineering field as a structural engineer for 5 years and I'm looking to make a career change. I joined the UCF coding bootcamp because I would like to become a professional web developer and pursue my interest in programming! These projects will provide an opportunity to practice the skills that I am learning in the bootcamp, while creating something new.</p>
            </div>
        </div>
    )
}

export default About