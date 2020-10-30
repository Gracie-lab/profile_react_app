import React from 'react'
import { ProfileImage, UsernameContainer, UsernameText } from './style'


export default function Username({userImage,name}) {
    return (
        <UsernameContainer>
            <ProfileImage src={userImage} />
            <UsernameText>{name}</UsernameText>
        </UsernameContainer>
    )
}
