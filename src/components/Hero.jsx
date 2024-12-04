import { useState , React, useRef} from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideodRef = useRef(null);

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>    
        <div>
            <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                <div onClick={handleMiniVdClick} className='origin-center'>
                    <video
                    ref={nextVideodRef}
                    src={getVideoSrc(currentIndex + 1)}
                    loop
                    muted
                    />
                </div>
                
            </div>
        </div>
        </div>
    </div>
           
  )
}

export default Hero