import {Container, Links, Content} from './styles'


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

             <h1>
               Introdução ao React
             </h1>

             <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error consequuntur
               aliquam dolorum minima quisquam perspiciatis exercitationem quis? Reprehenderit, 
               harum! Voluptatem doloremque odit quidem itaque vel vitae placeat natus dolorum.
             </p>
          
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
