import Categories from "./components/Categories";
import Pages from "./components/pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiForkKnifeSpoon } from "react-icons/gi";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Nav>
                    <Logo to={"/"}>
                        <GiForkKnifeSpoon />
                    </Logo>
                </Nav>
                <Body>
                    <Search />
                    <Categories />
                    <Pages />
                </Body>
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
`;

const Nav = styled.nav`
    padding: 2rem 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #ddd;
`;

const Body = styled.div`
    margin: 0 10%;
`;

export default App;
