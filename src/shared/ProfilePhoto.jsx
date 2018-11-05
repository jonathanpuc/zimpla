import React from 'react'
import styled from 'styled-components'

export default function ProfilePhoto({ photo, name }) {
    return (
        <Image src={photo} alt={name} />
    )
}

const Image = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 1px solid #c5c5c5;
    margin-right: 1rem;
`

