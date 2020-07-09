import React from 'react'

import { 
    Container,
    Retweeted,
    ReactIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles'

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                <ReactIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>JavaScript</strong>
                        <span>@js</span>
                        <Dot />
                        <time>09 de jul</time>
                    </Header>

                    <Description>Descrição de teste...</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            745
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet