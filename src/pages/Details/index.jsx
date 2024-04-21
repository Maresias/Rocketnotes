import {Container, Links} from './styles'


import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/button'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'


export function Details(){
  return (
    <Container>
      
      < Header/>
        <main>
            <Content>
             <ButtonText title="Excluir nota"/>
          
              <Section title= "Links úteis" > 
              <Links>
                <li><a href="#">https://www.rocketsest.com.br</a></li>
                <li><a href="#">https://www.rocketsest.com.br</a></li>
              </Links>

              </Section>

              <Section title="Marcadores">
                <Tag title='Express'/>
                <Tag title='Nodejs' />
              </Section>


              <Button title="Voltar" />
            </Content>
        </main>

    </Container>
  )
}
