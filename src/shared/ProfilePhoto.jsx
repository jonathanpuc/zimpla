import React from 'react'
import styled from 'styled-components'

export default function ProfilePhoto({ photo, name, small }) {
    return (
        <Image src={photo} alt={name} small={small} />
    )
}

const Image = styled.img`
    width: ${props => props.small ? '3.5rem' : '5rem'};
    height: ${props => props.small ? '3.5rem' : '5rem'};
    border-radius: 50%;
    border: 1px solid #c5c5c5;
    margin-right: 1rem;
`

