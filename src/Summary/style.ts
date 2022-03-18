import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        width: 50rem;
        

        header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        }

        strong { 
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
        }

        &.highlight-background {
            background-color: #33cc95;
            color: #FFF
        }
    }
`;