import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineSlack } from 'react-icons/ai'

const Contact = () => {
    return (
        <div id='contact'>
        <h2>Contact me</h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://github.com/JoseBedolla" target='_blank'><AiOutlineGithub className='cursor-pointer' size={30}/></a>
            <a href="https://www.linkedin.com/in/eliezer-bedolla/" target='_blank'><AiOutlineLinkedin className='cursor-pointer' size={30}/></a>
            <a href="#" target='_blank'><AiOutlineSlack className='cursor-pointer' size={30}/></a>
        </div>
        </div>    
    )
}

export default Contact