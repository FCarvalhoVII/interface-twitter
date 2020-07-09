import React from 'react'

import ProfilePage from '../ProfilePage'

import { 
    Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon, 
    SearchIcon,
    EmailIcon,
    BellIcon 
} from './styles'

const Layout: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                <ProfileInfo>
                    <strong>Felipe Carvalho</strong>
                    <span>612 Tweets</span>
                </ProfileInfo>
            </Header>

            <ProfilePage />

            <BottomMenu>
                <HomeIcon className="active" />
                <SearchIcon />
                <BellIcon/>
                <EmailIcon />
            </BottomMenu>
        </Container>
    )
}

export default Layout