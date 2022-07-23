import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiFruitBowl } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <List>
            <StyledLink to={"/cuisine/indian"}>
                <GiFruitBowl />
                <h4>Indian</h4>
            </StyledLink>
            <StyledLink to={"/cuisine/italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </StyledLink>
            <StyledLink to={"/cuisine/american"}>
                <FaHamburger />
                <h4>American</h4>
            </StyledLink>
            <StyledLink to={"/cuisine/thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </StyledLink>
        </List>
    );
};

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;
`;

const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 1rem;
    text-decoration: none;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    background-color: #eee;
    h4 {
        /* color: #fff; */
        font-size: 0.8rem;
        padding: 0.5rem;
    }
    &.active {
        background-color: #e9c46a;
    }
`;

export default Categories;
