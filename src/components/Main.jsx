import { TypeAnimation } from 'react-type-animation';
import { FaPython, FaReact,  } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiDotnet,  } from "react-icons/si";

const Main = () => {
    return(
        <div id='home' className='flex items-center flex-col space-y-40  h-screen mb-12 bg-fixed bg-center bg-cover bg-[url(https://fondosmil.com/fondo/17010.jpg)]'>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>Hello, my name is</h2>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Jose Bedolla</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm 
                        <TypeAnimation 
                            sequence={[
                                'Junior Developer',
                                2000,
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                                'Autodidact',
                                2000,
                                'Amateur Photographer',
                                2000,
                                'Teacher',
                                2000,
                            ]}
                            wrapper='div'
                            cursor={true}
                            repeat={Infinity}
                            style={{fontSize: '1em', paddingLeft: '5px'}}
                        />
                    </h2>

                </div>
            </div>
        </div>
    )
}

export default Main;