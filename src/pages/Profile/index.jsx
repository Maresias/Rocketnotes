import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar} from "./styles";
import { Link } from 'react-router-dom'

import { useAuth } from "../../hooks/auth";

import avaterPlaceholder from '../../assets/avatar_placeholder.svg'

import { Input  } from '../../components/Input'
import { Button } from '../../components/button'


export function Profile(){

    const {user, updateProfile} = useAuth()

    const [name, setName ] = useState(user.name)
    const [email, setEmail ] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()
    const [ avater, setAvater ] = useState(user.avater)
    const [avaterFile, setAvaterFile ] = useState(null)

    async function handleUpdateProfile(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({user, avaterFile})
    }

    function handleChangeAvater(event){
        const file  = event.target.files[0]
        setAvaterFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvater(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/> 
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src={avater} 
                    alt="Imagen do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvater}
                        />
                    </label>

                </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title={"Salvar"} onClick={handleUpdateProfile}/>

            </Form>

        </Container>
    )
}