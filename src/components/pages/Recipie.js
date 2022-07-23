import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipie = () => {
    let params = useParams();

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("Instructions");

    const getDetails = async (id) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailsData = await data.json();
        setDetails(detailsData);
    };

    useEffect(() => {
        getDetails(params.id);
        console.log(details);
    }, [params.id]);

    return (
        <Wrapper>
            <div>
                <h1>{details.title}</h1>
                <Summary>
                    <img src={details.image} alt={details.title} />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: details.summary,
                        }}
                    ></p>
                </Summary>
            </div>
            <Info>
                <Btn
                    className={activeTab === "Instructions" ? "active" : ""}
                    onClick={() => setActiveTab("Instructions")}
                >
                    Instructions
                </Btn>
                <Btn
                    className={activeTab === "Ingredients" ? "active" : ""}
                    onClick={() => setActiveTab("Ingredients")}
                >
                    Ingredients
                </Btn>
                {activeTab === "Instructions" && (
                    <div>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: details.instructions,
                            }}
                        ></p>
                    </div>
                )}

                {activeTab === "Ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    .active {
        background-image: linear-gradient(35deg, #494949, #313131);
        color: #fff;
    }
    h1 {
        margin: 1.2rem;
    }
    li {
        line-height: 1.5rem;
    }
    ul {
        margin: 1rem 0;
    }
    p {
        line-height: 1.5rem;
        margin-bottom: 1.5rem;
    }
`;

const Btn = styled.button`
    padding: 1rem;
    color: #313131;
    background: #fff;
    border: 2px solid #313131;
    margin: 1rem;
    cursor: pointer;
`;

const Summary = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem 5rem;
    img {
        margin: 1rem;
        border-radius: 1rem;
        flex: 1;
        width: 50%;
    }
    p {
        margin: 1rem;
        flex: 1;
    }
`;

const Info = styled.div`
    margin: 3rem 5rem;
`;

export default Recipie;
