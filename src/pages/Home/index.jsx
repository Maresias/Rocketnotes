import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { api } from '../../services/api'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'

export function Home(){
    const [ tags, setTags ] = useState([])


    useEffect(()=>{
        async function fatchTags(){
            const response = await api.get("/tags")

            setTags(response.data)
        }
    },[])
    return (
        <Container>
            <Brand>
               <h1>RocketNotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive/>
                </li>
                <li>
                    <ButtonText title="React"/>
                </li>
                <li>
                    <ButtonText title="NodeJs"/>
                </li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo"/>
            </Search>

            <Content>
                <Section title="Minhas notas"> 
                   <Note data={{
                     title: "React",
                     tags: [
                        {id:"1", name:"react"},
                        {id:"2", name:"rocketseat"}
                     ]
                   }}/>
                </Section>
            </Content>

            <NewNote to ="/new">
                <FiPlus/>
                 Criar nota
            </NewNote>
        </Container>
    )
}