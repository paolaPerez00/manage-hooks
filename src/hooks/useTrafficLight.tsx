import { useEffect, useState } from "react";


export const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = 'red' | 'yellow' | 'green';

export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countDown, setCountDown] = useState(5);

    //countDown Effect
    useEffect(() => {
        if (countDown === 0) return;
        const intervalId = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [countDown]);

    //change light Effect
    useEffect(() => {
        if (countDown > 0) return;
        setCountDown(5);
        if (light === 'red') {
            setLight('green')
        }
        if (light === 'yellow') {
            setLight('red')
        }
        if (light === 'green') {
            setLight('yellow')
        }
    }, [countDown, light]);


    return {
        countDown,
        percentage: (countDown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    };
}
