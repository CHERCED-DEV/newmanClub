import React, { useState, useRef, useEffect } from 'react';
import { WelcomeDataProps } from './utils/welcome.interface';
import { JoinUs } from './utils/JoinUs';
import Image from 'next/image';

export const Welcome: React.FC<WelcomeDataProps> = ({ welcome }) => {
    const [playing, setPlaying] = useState(true);
    const [wideScreen, setWideScreen] = useState(window.innerWidth >= 640);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (playing) {
            videoRef.current?.pause();
        } else {
            videoRef.current?.play();
        }
        setPlaying(!playing);
    };

    useEffect(() => {
        const handleResize = () => {
            setWideScreen(window.innerWidth >= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <main>
                <section className="welcome">
                    {wideScreen ? (
                        <video ref={videoRef} autoPlay className="welcome__video">
                            <source src={welcome.video.dsk.src} type="video/mp4" />
                            {welcome.video.dsk.alert}<code>video</code>.
                        </video>
                    ) : (
                        <video ref={videoRef} autoPlay className="welcome__video">
                            <source src={welcome.video.mob.src} type="video/mp4" />
                            {welcome.video.mob.alert}<code>video</code>.
                        </video>
                    )}
                    <button onClick={togglePlay} className="welcome__play">
                        {playing ? (
                            <Image
                                src={welcome.button.onPlay.src}
                                alt={welcome.button.onPlay.alt}
                                width={welcome.button.onPlay.width}
                                height={welcome.button.onPlay.height}
                            />
                        ) : (
                            <Image
                                src={welcome.button.onPause.src}
                                alt={welcome.button.onPause.alt}
                                width={welcome.button.onPause.width}
                                height={welcome.button.onPause.height}
                            />
                        )}
                    </button>
                </section>
                <JoinUs join_us={welcome.join_us} />
            </main>
        </>
    );
};

