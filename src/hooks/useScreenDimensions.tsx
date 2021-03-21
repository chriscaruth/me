import { useEffect, useState } from 'react';

interface ScreenDimensions {
    height: number | undefined;
    width: number | undefined;
}

const useScreenDimensions = () : ScreenDimensions => {
    const [windowSize, setWindowSize] = useState<ScreenDimensions>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        
        // Currently resizing affects when you scroll on mobile
        // window.addEventListener("resize", handleResize);
        handleResize();
        
        // return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default useScreenDimensions;
