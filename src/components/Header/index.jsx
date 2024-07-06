import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './style'


import avaterPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

import {useAuth} from "../../hooks/auth"

export function Header(){
    const { signOut, user } = useAuth()
    const avaterUrl = user.avater ?  `${api.defaults.baseURL}/files/${user.avater}` : avaterPlaceholder
    return (
        <Container>
            <Profile to="/profile">
                <img src={avaterUrl} alt="foto de uma pessoa" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut} to="/">
            <RiShutDownLine />
            </Logout>

        </Container>
    )
}