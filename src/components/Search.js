import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/search/" + input);
    };

    return (
        <Wrapper>
            <Form onSubmit={submitHandler}>
                <div>
                    <FaSearch />
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </Form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #fff;
    padding: 1rem;
`;

const Form = styled.form`
    margin: auto;
    width: 30rem;
    div {
        border: none;
        background-color: #eee;
        color: #333;
        padding: 1rem 3rem;
        outline: none;
        width: 100%;
        display: flex;
        border-radius: 1rem;
    }
    input {
        border: none;
        background-color: #eee;
        color: #333;
        margin: 0 1rem;
        outline: none;
        width: 100%;
    }
`;

export default Search;
