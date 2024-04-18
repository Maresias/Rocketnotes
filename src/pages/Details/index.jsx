import {Container, Links} from './styles'


import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/button'

export function Details(){
  return (
    <Container>
      
      < Header/>
      
      <Section title= "Links úteis" > 
        <Links>
          <li><a href="#">https://www.rocketsest.com.br</a></li>
          <li><a href="#">https://www.rocketsest.com.br</a></li>
        </Links>

      </Section>

      <Section title="Marcadores">

      </Section>


      <Button title="Voltar" />

    </Container>
  )
}
