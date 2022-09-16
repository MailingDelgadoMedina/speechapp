import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

function Animation() {

    const divcontain = useRef("");

    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: divcontain.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../public/speechtherapy.json')

        });

        //Clean up function to avoid repeating the lottie
        return () => instance.destroy();
    })
    return (
        <div>

            <div className=" divcontain " ref={divcontain}></div>
        </div>
    )
}

export default Animation