import styled from "@emotion/styled";
import SliderBoxProps from "../interfaces/SliderBoxProps";

const Wrapper = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 425px;
    height: 150px;
    margin: 15px;
    padding: 0 3%;
    background: #FFF;
    border-radius: 35px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Description = styled.p`
    margin: 0;
    color: #371548;
    font-size: 30px;
`

const Range = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 15px;
`

const Number = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    font-size: 24px;
`

const Input = styled.input`
    transition: .15s ease-out;
    display: block;
    cursor: pointer;
    width: 96.5%;
    appearance: none;
    background-color: #FDD207;
    border-radius: 50px;
    height: 15px;
    outline: none;
    margin: 0;

    &:hover,
    &:focus,
    &:active {
        background: #FDB000;
    }

    &:hover::-webkit-slider-thumb,
    &:active::-webkit-slider-thumb,
    &:focus::-webkit-slider-thumb {
        border: 8px solid #FDB000;
    }

    &::-webkit-slider-thumb {
        transition: .15s ease-out;
        position: relative;
        appearance: none;
        width: 27px;
        height: 27px;
        background: #000;
        border-radius: 50%;
        border: 8px solid #FDD207;
        box-shadow: ${makeLongShadow("#FFF")};
    }
`

function makeLongShadow (color: string): string {
    let shadow: string = `0 0 0 0 ${color}`;

    for (let i = 0; i < 500; i++) { 
        shadow = `${shadow}, ${i}px 0 0 0 ${color}`;
    }

    return shadow;
};

const SliderBox = ({ description, start, step, count, value, setValue }: SliderBoxProps) => {
    const range: number[] = new Array(count);
    const finish: number = start + step * (count - 1);

    for (let i = 0; i < count; i++) {
        range[i] = start + i * step;
    }

    return(
        <Wrapper>
            <Description> { description } </Description>
            <Range>
                { range.map(num => <Number key={num}>{ num }</Number>) }
            </Range>
            <Input onChange={e => setValue(e.target.value)} 
                   type="range" 
                   step={step} 
                   min={start} 
                   max={finish} 
                   value={value}
            />
        </Wrapper>
    )
}

export default SliderBox;