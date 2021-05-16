import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";

const Main = styled.div`
    height: 100vh;
    font-family: Roboto;
    padding: 0 10%;
`

const Logo = styled.div`
    position: absolute;
    top: 5%;
    right: 3%;
`

const Layout = ({ title, children }) => {
    return(
        <Main>
            <Global
                styles={css`
                    *,
                    *:before,
                    *:after {
                        margin: 0;
                        padding: 0;
                        text-decoration: none;
                        list-decoration: none;
                        outline: none;
                        border: none;
                    }

                    html {
                        height: 100%;
                        background-color: #F6F9FF;
                    }

                    a:visited {
                        color: unset;
                    }
                `}
            />
            <Head>
                <title>{title} | Поле зрения</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap" rel="stylesheet"/>
            </Head>
            <Logo className="logo">
                <Image src="/logo.png" alt="logo" width="225" height="90" priority={true}/>
            </Logo>
            { children }
        </Main>
    )
}

export default Layout;