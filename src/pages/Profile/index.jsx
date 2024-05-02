import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Form } from "./styles";


import { Input  } from '../../components/Input'
import { Button } from '../../components/button'


export function Profile(){
    return (
        <Container>
            <header>
                <a href="#">
                    <FiArrowLeft/>
                </a>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/maresias" 
                    alt="Imagen do usuário" />
                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title={"Salvar"}/>

            </Form>

        </Container>
    )
}