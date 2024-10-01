import {Canvas} from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import CanvasLoader from "../components/CanvasLoader"
import HackerRoom from "../components/HackerRoom"
import {Leva, useControls} from "leva"
import Button from "../components/Button"
import HeroCamera from "../components/HeroCamera"

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
                Hi, I am Joshua <span className='waving-hand'>✋</span>
            </p>
            <p className='hero_tag text-gray_gradient'>
                Building Projects
            </p>
        </div>
        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera makeDefault position={[0, 1.2, 8]} />
                        <HackerRoom 
                        scale={0.025} 
                        position={[0.125, -0.5, 0]} 
                        rotation={[0.2, 3.2, 0]}/>


                    <ambientLight intensity={1} />
                    <directionalLight position={[0,0,0]} intensity={1} />

                 </Suspense>
            </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#contact" className="w-fit">
                <Button name= "Let's work together" isBeam containerClass= 'sm:w-fit w-full sm:min-w-96'/>
            </a>

        </div>

    </section>
  )
}

export default Hero