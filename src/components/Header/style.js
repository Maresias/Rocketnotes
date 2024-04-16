import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    height: 10.5rem;
    width: 100%;

    border-bottom: 1px solid ${({theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content:  space-around;

    padding:  0 8rem;

    background-color: cornflowerblue;
`

export const Profile = styled.div`
    
`

