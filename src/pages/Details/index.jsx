import {Container} from './styles'

import { Button } from '../../components/button'

export function Details(){
  return (
    <Container>
      <h1>Hello World</h1>
      <h2>Alexandre</h2>

      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar" />
    </Container>
  )
}
