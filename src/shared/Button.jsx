import React from 'react'
import styled from 'styled-components'

export default function ({ secondary = false, children, onClick }) {

    return (
        <Button onClick={onClick} secondary={secondary}>
            {children}
        </Button>
    )
}

const Button = styled.button`
        border: none;
        background-color: ${props => props.secondary ? props.theme.colors.blue : props.theme.colors.orange};
        color: #fff;
        width: 15rem;
        padding: 10px;
        margin: 10px auto;
        display: block;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.3rem;
        cursor: pointer;
        &:hover, &:focus {
            transform: scale(0.95);
        }
        transition: transform 500ms ease;
`