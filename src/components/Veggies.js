import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Veggies = () => {
    const [veggie, setVeggie] = useState([]);

    const getVeggie = async () => {
        const check = localStorage.getItem("veggie");
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
            );
            const data = await api.json();
            // can only store string data in local storage
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(veggie);
        }
    };

    useEffect(() => {
        getVeggie();
    }, []);
    return (
        <div>
            <Wrapper>
                <h2>Vegetarian picks</h2>
                <Splide
                    options={{
                        perPage: 3,
                        // arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {veggie.map((recipie) => {
                        return (
                            <SplideSlide key={recipie.id}>
                                <Card>
                                    <Link to={"/recipie/" + recipie.id}>
                                        <h4>{recipie.title}</h4>
                                        <img
                                            src={recipie.image}
                                            alt={recipie.title}
                                        />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
    margin: 4rem 0;
`;

const Card = styled.div`
    min-height: 18rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    img {
        border-radius: 1rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h4 {
        position: absolute;
        z-index: 10;
        /* left: 50%; */
        bottom: 0;
        /* margin: 1rem; */
        color: #fff;
        text-align: center;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 0.8rem;
    }
`;

const Gradient = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent 20%, rgba(0, 0, 0, 0.75));
    transition: 250ms ease;
    :hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

export default Veggies;
