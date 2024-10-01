import React from 'react'
import Globe from 'react-globe.gl'
import Button from "../components/Button"
import {useState} from 'react'

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('josh.ngu101@gmail.com');

        setHasCopied(true);

        setTimeout(()=>{
            setHasCopied(false);
        }, 20000)
    }
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
    <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
            <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
            <div>
                <p className='grid-headtext'>Hi, I am Joshua</p>
                <p className='grid-subtext'>Graduating the University of Houston in 2027, I enjoy developing passion 
                    projects that highlight my skillset and knowledge of computer science. </p>

            </div>

        </div>
    </div>
        <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
                <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain' />
                <div>
                    <p className='grid-headtext'>Tech Stack</p>
                    <p className='grid-subtext'>My skills are C++, Python, Assembly, and Javascript</p>

                </div>
            </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
            <div className='grid-container'>
                <div className='round-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                    <Globe 
                        height={326} 
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{
                            lat:29.5, 
                            lng:-95, 
                            text: "I'm here", 
                            color:'white', 
                            size: 100}]}
                        />

                </div>
                <div>
                    <p className='grid-headtext'>
                        I work on-site exclusively in Texas and remotely across US timezones.
                    </p>
                    <p className='grid-subtext'>
                        I'm based in Houston, TX, willing to move to cities in Texas, with remote work available.
                    </p>
                    <Button name='Contact me' isBeam containerClass='w-full mt-10'/>
                </div>

            </div>

        </div>
        <div className='xl:col-span-2 xl: row-span-3'>
            <div className='grid-container'>
                <img src='assets/grid3.png' alt='grid-3' className='w-full sm:h[266px] h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'> My Passion for Coding </p>
                    <p className='grid-subtext'> I love solving problems and building things though code.  </p>
                </div>

            </div>

        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
            <div className='grid-container'>
                <img src='assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                <div className='space-y-2'>
                    <p className='grid-subtext text-center'>
                        Contact me
                        </p>
                    <div 
                    className='copy-conatiner flex flex-col items-center justify-center space-y-2' 
                    onClick={handleCopy}>

                        <img 
                        src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                        alt={'copy'}/>

                        <p className='lg:text-sm md:text-sm font-medium text-gray_gradient text-white'>
                            josh.ngu101@gmail.com
                            </p>
                    </div>

                </div>

            </div>

        </div>

    </div>
    </section>
  )
}

export default About