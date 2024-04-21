import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'

export function Home(){
    return (
        <Container>
            <Brand>
               <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
            </Menu>

            <Seach>
            </Seach>

            <Content>
            </Content>

            <NewNote>
            </NewNote>
        </Container>
    )
}