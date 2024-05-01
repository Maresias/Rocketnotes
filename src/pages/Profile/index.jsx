import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container, Form } from "./styles";


import { Input  } from '../../components/Input'


export function Profile(){
    return (
        <Container>
            <header>
                <a href="#">
                    <FiArrowLeft/>
                </a>
            </header>

            <Form>
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

            </Form>

        </Container>
    )
}