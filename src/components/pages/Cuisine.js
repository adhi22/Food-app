import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );
        const recipies = await data.json();
        setCuisine(recipies.results);
        console.log(recipies);
    };

    useEffect(() => {
        getCuisine(params.type);
        // console.log(params);
    }, [params.type]);

    return (
        <Grid
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipie/" + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
};

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
    padding-bottom: 5rem;
    padding-top: 2rem;
`;

const Card = styled.div`
    border-radius: 1rem;
    transition: 250ms ease;
    img {
        width: 100%;
        border-radius: 1rem 1rem 0 0;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }

    :hover {
        background-color: rgba(0, 0, 0, 0.05);
        /* box-shadow: 5px 1px 0 #555; */
        box-shadow: 2px 5px 10px #999;
    }
`;

export default Cuisine;
