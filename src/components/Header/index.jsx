import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style'

import {useAuth} from "../../hooks/auth"

export function Header(){
    const { signOut } = useAuth()
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/Maresias.png" alt="foto de uma pessoa" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Alexandre Correia</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
            <RiShutDownLine />
            </Logout>

        </Container>
    )
}