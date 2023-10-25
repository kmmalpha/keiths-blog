import React, { useEffect, useState } from "react";
import './styles/flicking.css'

const sentences = [
    "Hi, for the most part, I know it might not generally fit the entire blog's look or design",
    "But I thought it looked cool.",
    "And I really wanted to add it to the home page and convert it from JS to ReactJS.",
]

const skip_delay = 15;
const speed = 70;

const FlickingComponent = () => {
    const [currentSentence, setCurrentSentence] = useState(sentences[0]);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (forwards) {
                                if (offset >= currentSentence.length) {
                                    setSkipCount((prev) => prev + 1);
                                    if (skipCount === skip_delay) {
                                        setForwards(false);
                                        setSkipCount(0);
                                    }
                                }
                            }
            else if (offset === 0) {
                                    setForwards(true);
                                    setCurrentIndex((prev) => prev + 1);
                                    if (currentIndex >= sentences.length) {
                                        setCurrentIndex(0);
                                    }
                                }

            let part = currentSentence.substr(0, offset);
            if (skipCount === 0) {
                if (forwards) {
                    setOffset((prev) => prev + 1);
                } else {
                    setOffset((prev) => prev - 1);
                }
            }

            setCurrentSentence(part);
        }, speed);

        return () => {
            clearInterval(intervalId)
        };
    }, [currentSentence, offset, forwards, skipCount, currentIndex]);

    return <div className='sentence' />
};
export default FlickingComponent;