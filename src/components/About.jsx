// import profile_pic from '../assets/bootcamp_profile_picture.jpg'
import profile_pic from '../assets/bowtie-cat.png'
function About() {
    return (
        <div className='about card'>
            <h1 className='text-center'>About Me</h1>
            <div className="card-body  d-flex justify-content-center">
                <img src={profile_pic} alt="" />
                <div>
                    <p>Hello and welcome to my Portfolio page! My name is Alex Lenson, and I am an aspiring web devleoper passionate about creating engaging web applications. Here, you'll find my current and upcoming projects, accompanied by links to their deployed applications. These projects are my playground for refining skills across various web development technologies.</p>
                    <p>I have worked in the aerospace engineering field as a structural engineer for 5 years and I'm looking to make a career change. I joined the UCF coding bootcamp because I would like to become a professional web developer and pursue my interest in programming! These projects provide an opportunity to practice the skills that I have learned in the bootcamp, while creating something new.</p>
                </div>
            </div>
        </div>
    )
}

export default About