import React, { useState } from 'react'
import styled from 'styled-components'
import rightArrow from '../img/right-arrow.png'
import sentMail from '../img/sent-mail.png'
export default function FormInputGroup({ placeholder, onSubmit, invites, margin }) {
    const [text, setText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(text)
    }

    function handleTextChange(e) {
        setText(e.target.value)
    }

    return invites ?
        <Form onSubmit={handleSubmit} margin={margin}>
            <input type="text" placeholder={placeholder} value={text} onChange={handleTextChange} />
            <SubmitButton type='submit' blue><img src={sentMail} alt="send" /></SubmitButton>
        </Form>
        :
        <Form onSubmit={handleSubmit} margin={margin}>
            <input type="text" placeholder={placeholder} value={text} onChange={handleTextChange} />
            <SubmitButton type='submit'><img src={rightArrow} alt="done" /></SubmitButton>
        </Form>
}

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${props => props.margin ? props.theme.spacing.margin.small : '0px'};
    input {
        width: 150px;
        height: 10px;
        border-radius: 4px;
        border: 1px solid #C8C8C8;
        padding: 10px;
        &::placeholder {
            text-transform: uppercase;
            font-size: 13px;
        }
    }
`

const SubmitButton = styled.button`
    background-color: ${props => props.blue ? props.theme.colors.blue : props.theme.colors.orange};
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
    margin-left: 12px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 100%;

    }
`
