import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { wordList } from "../db/wordList";
import PlayGroundProps from "../interfaces/PlayGroundProps";

const Output = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: 900;
    font-size: 40px;
    text-transform: lowercase;
    color: #371548;
`

const Span = styled.span`
    font-size: 100px;
`

const generateWrapper = (offset: number) => {
    return styled.div`
        display: flex;
        align-items: center;
        width: 100px;

        &:first-of-type {
            justify-content: flex-end;
            transform: translateX(-${offset}px);
        }

        &:last-of-type {
            justify-content: flex-start;
            transform: translateX(${offset}px);
        }
    `
}

let Wrapper = generateWrapper(0);

const PlayGround = (props: PlayGroundProps) => {
    const [word, setWord] = useState("");
    const [firstPart, setFirstPart] = useState("");
    const [secondPart, setSecondPart] = useState("");
    const [usedWords, setUsedWords] = useState([]);
    const router = useRouter();

    let dynamicOffset: number = Number(props.startDistance);

    useEffect(() => {
        let ticks: number = 1;
        Wrapper = generateWrapper(dynamicOffset / 2);

        const externalTimer = setTimeout(function internalTimer(): void {
            dynamicOffset += Number(props.distanceIncrease);
            Wrapper = generateWrapper(dynamicOffset / 2);
            
            setWord(getRandomWord());

            if (ticks < props.wordCount) {
                ticks++;
                setTimeout(internalTimer, props.speed * 1000);
            }
            else {
                setTimeout(() => router.push("/endgame"), 1000);
                clearTimeout(externalTimer);
            }
        }, 0);
    }, []);

    useEffect(() => splitWord(), [word]);

    const getRandomWord = (): string => {
        const filteredWordList: string[] = wordList.filter(word => word.length == props.letterCount);

        while (true) {
            const randomNum: number = Math.round(-0.5 + Math.random() * (filteredWordList.length - 1 + 1));
            const randomWord: string = filteredWordList[randomNum];

            if (!usedWords.includes(randomWord)) {
                setUsedWords(prevState => {
                    prevState.push(randomWord);
                    return prevState;
                });
                return randomWord;
            }

            if (usedWords.length === filteredWordList.length) {
                setUsedWords(prevState => {
                    prevState = [];
                    prevState.push(randomWord);
                    return prevState;
                });
                return randomWord;
            }
        }
    }

    const splitWord = () => {
        if (word && word.length % 2 === 0) {
            setFirstPart(word.substr(0, word.length / 2));
            setSecondPart(word.substr(word.length / 2, word.length));
        }
        else if (word && word.length % 2 === 1) {
            setFirstPart(word.substr(0, word.length / 2 + 1));
            setSecondPart(word.substr(word.length / 2 + 1, word.length));
        }
    }

    return (
        <Layout title="Игра">
            <Output>
                <Wrapper>
                    { firstPart }
                </Wrapper>
                <Span className="separator"> ~ </Span>
                <Wrapper>
                    { secondPart }
                </Wrapper>
            </Output>
        </Layout>
    )
}

export default PlayGround;

export async function getServerSideProps (context) {
    return {
        props: { ...context.query }
    }
}