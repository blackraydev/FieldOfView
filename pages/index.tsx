import styled from "@emotion/styled";
import Layout from "../components/Layout";
import NumberBox from "../components/NumberBox";
import SliderBox from "../components/SliderBox";
import Link from "next/link";
import { useState } from "react";

const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const TitleHolder = styled.div`
    position: absolute;
    top: 5%;
`

const Title = styled.h1`
    color: #2B3172;
    margin-top: 25px;
`

const Boxes = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 12.5%;
`

const StartButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 425px;
    height: 150px;
    margin: 15px 15px 0 15px;
    padding: 0 3%;
`

const StartButton = styled.button`
    transition: .15s ease-out;
    width: 225px;
    height: 60px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background: #FDD207;
    color: #371548;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 700;
    border-radius: 50px;
    border: none;
    cursor: pointer;

    &:hover {
        background: #FDB000;
    }
`

const Menu = () => {
    const [wordCount, setWordCount] = useState(6);
    const [startDistance, setStartDistance] = useState(25);
    const [letterCount, setLetterCount] = useState(8);
    const [distanceIncrease, setDistanceIncrease] = useState(25);
    const [speed, setSpeed] = useState(1);

    return(
        <Layout title="Меню">
            <Content>
                <TitleHolder>
                    <Title> Тренажер «Поле зрения» </Title>
                </TitleHolder>
                <Boxes>
                    <SliderBox description="Сколько слов" 
                               start={1} 
                               step={1} 
                               count={10} 
                               value={wordCount} 
                               setValue={setWordCount} 
                    />
                    <SliderBox description="Стартовое расстояние" 
                               start={5} 
                               step={5} 
                               count={8} 
                               value={startDistance} 
                               setValue={setStartDistance} 
                    />
                    <SliderBox description="Сколько букв в словах" 
                               start={3}
                               step={1} 
                               count={10} 
                               value={letterCount} 
                               setValue={setLetterCount} 
                    />
                    <SliderBox description="Увеличение расстояния" 
                               start={5} 
                               step={5} 
                               count={8} 
                               value={distanceIncrease} 
                               setValue={setDistanceIncrease} 
                    />
                    <NumberBox speed={speed} setSpeed={setSpeed}/>
                    <StartButtonWrapper>
                            <Link href={{
                                    pathname: "/playground",
                                    query: { wordCount, startDistance, letterCount, distanceIncrease, speed }
                                }}>
                                <StartButton>
                                    Старт
                                </StartButton>
                            </Link>
                    </StartButtonWrapper>
                </Boxes>
            </Content>
        </Layout>
    )
};

export default Menu;