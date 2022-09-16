import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';

function Megaphone() {

    const mycontainer = useRef("");

    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: mycontainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../public/megaphone.json')

        });
        return () => instance.destroy();

    })
    return (
        <div>

            <div className='mycontainer' ref={mycontainer}></div>
        </div>
    )
}

export default Megaphone