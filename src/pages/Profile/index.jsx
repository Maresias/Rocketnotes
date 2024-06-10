import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar} from "./styles";
import { Link } from 'react-router-dom'

import { useAuth } from "../../hooks/auth";

import { Input  } from '../../components/Input'
import { Button } from '../../components/button'


export function Profile(){

    const {user} = useAuth()

    const [name, setName ] = useState(user.name)
    const [email, setEmail ] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/> 
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/Maresias.png" 
                    alt="Imagen do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>

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