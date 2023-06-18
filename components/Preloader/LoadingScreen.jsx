import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web';
import data from './loading.json'; // Replace with the correct path to your animation JSON file


const LoadingScreen = () => {
  const crf = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: crf.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data,
      
    });

    return () => {
      anim.destroy();
    };
  }, []);
  
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-yellow">
      <div style={{ width: '200px', height: '200px' }} ref={crf} />
    </div>
    
    </>
  );
}

export default LoadingScreen;