// import profile_pic from '../assets/bootcamp_profile_picture.jpg'
import profile_pic from '../assets/bowtie-cat.png'
function About(){
    return(
        <div className='about card'>
            <h1 className='text-center'>About Me</h1>
            <div className="card-body  d-flex justify-content-center">
                <img src={profile_pic} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quia, rem odio repellat quis praesentium. Adipisci atque maxime reprehenderit ad enim aperiam id culpa odit dolores. Magni animi nostrum similique.</p>
            </div>
        </div>
    )
}

export default About