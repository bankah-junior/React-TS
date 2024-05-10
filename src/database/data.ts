import imgL1 from '../assets/imgL1.jpg';
import imgL2 from '../assets/imgL2.jpg';
import imgL3 from '../assets/imgL3.jpg';
import imgR1 from '../assets/imgR1.jpg';
import imgR2 from '../assets/imgR2.jpg';
import imgR3 from '../assets/imgR3.jpg';

type dataType = {
    id: number,
    image: string,
    text1: string,
    text2: string,
}

export const tryData: dataType = {
    id: 0,
    image: imgL1,
    text1: "Fashion Has To Reflect",
    text2: "Who You Are",
}

export const data = [
    {
        id: 0,
        image: imgL1,
        text1: "Fashion Has To Reflect",
        text2: "Who You Are",
        direction: "left",
    },
    {
        id: 1,
        image: imgR1,
        text1: "Fashion Has To Reflect",
        text2: "Who You Are",
        direction: "right",
    },
    {
        id: 2,
        image: imgL2,
        text1: "Fashion Has To Reflect",
        text2: "Who You Are",
        direction: "left",
    },
    {
        id: 3,
        image: imgR2,
        text1: "Fashion Has To Reflect",
        text2: "Who You Are",
        direction: "right",
    },
    {
        id: 4,
        image: imgL3,
        text1: "Fashion Has To Reflect",
        text2: "Who You Are",
        direction: "left",
    },
    {
        id: 5,
        image: imgR3,
        text1: "Fashion Has To Reflect",
        text2: "Who You Are",
        direction: "right",
    },
]