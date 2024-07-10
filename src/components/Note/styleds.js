import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    border: none;
    border-radius: 1.6rem;
    padding: 0 3rem;
 

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
        margin-bottom: 1rem;
    }

    margin-bottom: 1rem;
    padding-top: 1rem;
`