import React, { useState } from 'react'
import styled from 'styled-components'
import rightArrow from '../img/right-arrow.png'

export default function InputGroup({ placeholder, onSubmit, invites }) {
    const [text, setText] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(text)
    }

    function handleTextChange(e) {
        setText(e.target.value)
    }

    return invites ?
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder} value={text} onChange={handleTextChange} />
            <SubmitButton type='submit'>Invite</SubmitButton>
        </Form>
        :
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder} value={text} onChange={handleTextChange} />
            <SubmitButton type='submit'><img src={rightArrow} alt="done" /></SubmitButton>
        </Form>
}

const Form = styled.div`
    display: flex;
`

const SubmitButton = styled.button`
    background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.orange};
    height: 3.1rem;
    width: 3.1rem;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;

    }
`
