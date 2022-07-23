import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const [recipie, setRecipie] = useState([]);
    let params = useParams();

    useEffect(() => {
        const getResult = async (name) => {
            const data = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
            );
            const recipies = await data.json();
            setRecipie(recipies.results);
            console.log(recipie);
        };

        getResult(params.item);
    }, [params.item]);

    return (
        <Grid>
            {recipie.map((item) => {
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
`;

const Card = styled.div`
    border-radius: 1rem;
    transition: 250ms ease;
    img {
        width: 100%;
        border-radius: 1rem;
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

export default SearchPage;
