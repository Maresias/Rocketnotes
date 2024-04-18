import {Container} from './styles'


import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/button'

export function Details(){
  return (
    <Container>
      
      < Header/>
      
      <Section title= "Links úteis" > 
        <ul>
          <li>Oi</li>
          <li>cade</li>
          <li>vice</li>
        </ul>

      </Section>


      <Button title="Voltar" />

    </Container>
  )
}
