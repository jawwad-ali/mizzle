"use client"

import { useEffect, useState } from 'react'
import { gsap, CSSPlugin, Expo } from 'gsap';
gsap.registerPlugin(CSSPlugin)
import "./loading.css"

const Loading = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < 100) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return 100; // Ensure the count is set to 100
                }
            });
        }, 25);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Animation
    const reveal = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                console.log("Completed");
            }
        })
        tl.to(".follow", {
            width: "100%",
            delay: 0.7,
            duration: 1.2,
            ease: Expo.easeInOut
        })
            .to(".hide", {
                opacity: 0,
                duration: 1.2
            })
            .to(".hide", {
                display: "none",
                duration: 1.2
            })
            .to(".follow", {
                height: "100%",
                duration: 0.3,
                delay: 0.5,
                ease: Expo.easeOut
            })
            .to(".content", {
                width: "100%",
                ease: Expo.easeInOut,
                delay: 0.2,
                duration: 0.1
            })
            .to(".main", {
                display: "block",
                duration: 0.2,
                ease: Expo.easeIn,
            })
            .to(".main", {
                opacity: 2,
                duration: 0.1,
                ease: Expo.easeIn,
                stagger: 1,
                // color: "black",
            })
    }
    reveal()

    return (
        <div>
            <div className="loading">

                <div className="follow"></div>

                <div className="progress-bar hide" style={{ width: count + "%" }}></div>

                <div className="count">{count}%</div>

            </div>
        </div>
    )
}

export default Loading