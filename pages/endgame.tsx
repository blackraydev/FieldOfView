import Layout from "../components/Layout";
import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";

const Congrats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

const Text = styled.h1`
    font-size: 40px;
    color: #2B3172;    
`

const Endgame = () => {
    return(
        <Layout title="Завершение">
            <Link href="/">
                <Congrats>
                    <Image src="/congrats.png" alt="logo" width="350" height="400" priority={true}/>
                    <Text>Отличная работа!</Text>
                </Congrats>
            </Link>
        </Layout>
    )
}

export default Endgame;