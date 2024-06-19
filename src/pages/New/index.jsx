import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/button'

import { Container, Form} from './styles'
import { Link } from 'react-router-dom'

export function New() {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")

    const [links, setLinks ] = useState([])
    const [newLink, setNewLink] = useState("")

    const [ tags, setTags ] = useState([])
    const [ newTag, setNewTag ] = useState("")

    function handleAddLink(){
        setLinks( prevState => [ ...prevState, newLink ])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks( prevState => prevState.filter( link => link !== deleted ))
    }

    function handleAddTag(){
        setTags( prevState => [ ...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags( prevState => prevState.filter( tag => tag !== deleted ))
    }

    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título"/>

                    <Textarea placeholder="Observações"/>

                    <Section title="Links úteis">

                        <NoteItem 
                         isNew
                         placeholder="Novo Link"
                         value={newLink}
                         onChange={ e => setNewLink( e.target.value)}
                         onClick={handleAddLink}
                        />

                        {
                            links.map((link, index)=> (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={()=> handleRemoveLink(link)}
                            />
                            ))
                        }

                    </Section>

                    <Section title="marcadores">

                        <div className="tags">
                            <NoteItem  
                             isNew
                             placeholder="Nova Tag"
                             value={newTag}
                             onChange={ e => setNewTag( e.target.value)}
                             onClick={handleAddTag}
                             />

                            {
                                tags.map((tag, index) =>(
                                 <NoteItem
                                     key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                 />
                            ))
                           }

                        </div>

                    </Section>
                    
                    <Button title={"Salvar"}/>
                </Form>
            </main>
        </Container>
    )
}