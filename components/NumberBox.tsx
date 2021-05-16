import styled from "@emotion/styled";
import NumberBoxProps from "../interfaces/NumberBoxProps";

const Wrapper = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 425px;
    height: 150px;
    margin: 15px 15px 0 15px;
    padding: 0 3%;
    background: #FFF;
    border-radius: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Description = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    margin: 0;
    color: #371548;
    font-size: 30px;
`

const NumberInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 32px;
    font-size: 26px;
    border-radius: 10px;
    border: 0.5px solid #000;
    color: #000;
`

const Buttons = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: none;
`

const Button = styled.button`
    transition: .15s ease-out;
    position: relative;
    font-family: Roboto;
    background: #FDD207;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    outline: none;
    border: none;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background: #FDB000;
    }

    &:before {
        left: 25%;
        top: 47.5%;
        content: "";
        position: absolute;
        width: 50%;
        height: 10%;
        background: #000;
    }

    &:last-child:after {
        transform: rotate(90deg);
        left: 25%;
        top: 47.5%;
        content: "";
        position: absolute;
        width: 50%;
        height: 10%;
        background: #000;
    }
`

const NumberBox = ({ speed, setSpeed }: NumberBoxProps) => {
    const increaseSpeedHandler = (): void => {
        if (speed < 5) {
            setSpeed(speed + 0.5);
        }
    }

    const decreaseSpeedHandler = (): void => {
        if (speed > 1) {
            setSpeed(speed - 0.5);
        }
    }

    return(
        <Wrapper>
            <Description>
                <span> Скорость </span>
                <NumberInput> { speed } </NumberInput>
                <span> сек. </span>
            </Description>
            <Buttons>
                <Button onClick={decreaseSpeedHandler}/>
                <Button onClick={increaseSpeedHandler}/>
            </Buttons>
        </Wrapper>
    )
}

export default NumberBox;