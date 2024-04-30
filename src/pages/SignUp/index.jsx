import { Container, Form, Background } from './styles'
import { FiMail, FiLock} from 'react-icons/fi'

import { Input } from "../../components/Input"
import { Button } from '../../components/button'

export function SignUp (){
    return (
        <Container>
             <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button>
                    Entrar
                </Button>

                <a href="#"> Criar Conta</a>
            </Form>
        </Container>
    )
}