import React from 'react'
import styled from 'styled-components'
import randomColor from 'randomcolor'

export default function ProfilePhoto({ photo, name, small, large, noMargin = false }) {


    if (photo) {
        return (
            <Image src={photo} alt={name} small={small} large={large} noMargin={noMargin} />
        )
    } else {
        return (
            <PlaceholderPhoto color={randomColor({ luminosity: 'dark' })} small={small} large={large} noMargin={noMargin}>
                <p>{name.split('')[0].toUpperCase()}</p>
            </PlaceholderPhoto>
        )
    }
}

const Image = styled.img`
    width: ${props => props.small ? '3.5rem' : props.large ? '8rem' : '5rem'};
    height: ${props => props.small ? '3.5rem' : props.large ? '8rem' : '5rem'};
    border-radius: 50%;
    border: 1px solid #c5c5c5;
    margin-right: ${props => props.noMargin ? '0px' : '1rem'};
`

const PlaceholderPhoto = styled.div`
    width: ${props => props.small ? '3.5rem' : props.large ? '8rem' : '5rem'};
    height: ${props => props.small ? '3.5rem' : props.large ? '8rem' : '5rem'};
    border-radius: 50%;
    border: 1px solid #c5c5c5;
    margin: 0 auto;
    background-color: ${props => props.color};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.small ? '1rem' : props.large ? '2.5rem' : '1.5rem'};
`
