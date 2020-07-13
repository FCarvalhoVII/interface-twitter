import React from 'react'

import Feed from '../Feed'

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles'

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Felipe Carvalho</h1>
                <h2>@nickname</h2>

                <p>
                    Desenvolvedor JavaScript FullStack
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Minas Gerais, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 20 de junho de 1996
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>127</strong>
                    </span>
                    <span>
                        <strong>77 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    )
}

export default ProfilePage