
import React, { useState, useEffect, useRef } from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components'
import moment from 'moment'
import sentMail from '../img/sent-mail.png'
import ProfilePhoto from '../shared/ProfilePhoto'

export default function Messages({ messages, onMessagesChanges, members }) {

    const messagesListEl = useRef(null)

    useEffect(() => {
        messagesListEl.current.scrollTop = messagesListEl.current.scrollHeight
    }, [messages])

    const appData = JSON.parse(localStorage.getItem('zimpla-data'))
    const { name } = appData.profile

    const [messageText, setMessageText] = useState('')
    const [focusedMessage, setFocusedMessage] = useState(0)

    function handleMessageInput(e) {
        setMessageText(e.target.value)
    }

    function sendMessage(e) {
        e.preventDefault()

        if (messageText) {
            const message = {
                id: Date.now() + 1,
                user: name,
                text: messageText,
                createdAt: moment(Date.now()).format()
            }

            const updatedMessages = [...messages, message]
            onMessagesChanges(updatedMessages)
            setMessageText('')
            window.scrollTo(0, document.body.scrollHeight);
        }
    }

    function toggleFocusedMessage(id) {
        setFocusedMessage(focusedMessage !== id ? id : 0)
    }


    const renderMessages = messages.map((message, idx) => {
        if (message.user.toLowerCase() === name.toLowerCase()) {
            return (
                <MessageOuter user={true} key={message.id} >
                    {focusedMessage === message.id && (<MessageTimestamp>{moment(message.createdAt).calendar()}</MessageTimestamp>)}
                    <UsersMessage onClick={() => toggleFocusedMessage(message.id)} >
                        <div>{message.text}</div>
                    </UsersMessage>
                </MessageOuter >
            )
        } else {
            const author = members.find(member => member.name.toLowerCase() === message.user.toLowerCase())
            return (
                <MessageOuter user={false} key={message.id}>
                    <div>
                        <ProfilePhoto photo={author.photo} name={author.name} small />
                    </div>
                    <div>
                        {focusedMessage === message.id && (<MessageTimestamp>{moment(message.createdAt).calendar()}</MessageTimestamp>)}
                        <Message onClick={() => toggleFocusedMessage(message.id)}>
                            <div>
                                {message.text}
                            </div>
                        </Message>
                    </div>
                </MessageOuter>
            )
        }

    })


    return (
        <Outer>
            <MessageList ref={messagesListEl}>
                <ReactCSSTransitionGroup
                    transitionName="message"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {renderMessages}
                </ReactCSSTransitionGroup>

            </MessageList>

            <Form onSubmit={sendMessage}>
                <MessageInput messageText={messageText}>
                    <div>
                        <input type='text' value={messageText} onChange={handleMessageInput} placeholder='Aa' />
                    </div>
                    <button type='submit'>
                        <img src={sentMail} alt="send message" />
                    </button>
                </MessageInput>

            </Form>

        </Outer>
    )
}


const MessageTimestamp = styled.span`
    @keyframes fadeIn {
        from {opacity: 0.1;}
        to {opacity: 1;}
    }

    animation-name: fadeIn;
    animation-duration: 1s;
    font-size: 14px;
    color: #a2a2a2;
    padding: 3px;


`

const MessageInput = styled.div`
    background-color: #fff;
    width: 200px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    input {
        min-height: 35px;
        max-height: 50px;
        overflow: scroll;
        border: none;
        outline: none;
        padding-left: 15px;
        border-radius: 20px;
        box-shadow: 0 0 3pt 2pt #c8c8c8;
    }

    > div:first-child {
        width: 75%;
    }

    button {
        background-color: ${props => props.messageText ? props.theme.colors.blue : '#EDEFF0'};
        border-radius: 50%;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        transition: background-color 0.5s ease-in;
    }

`

const MessageList = styled.div`
    overflow: scroll;
    max-height: 500px;
`

const Outer = styled.div`
    background-color: #fff;

    .message-enter {
        > div:first-child {
            opacity: 0.01;
            transform: scale(0.7);
        }
    }

    .message-enter.message-enter-active {

        > div:first-child {
            opacity: 1;
            transform: scale(1);
            transition: opacity 500ms ease-in,
            transform 500ms ease-in;
        }
    }

    .message-leave {
    opacity: 1;
    }

    .message-leave.message-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
    }
`

const Form = styled.form`
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%);
`

const MessageOuter = styled.div`
    margin: 25px 0px;
    display: flex;
    flex-direction: ${props => props.user ? 'column' : 'row'};
    align-items: ${props => props.user ? 'flex-end' : 'center'};
    >div:last-child {
        display: flex;
        flex-direction: ${props => props.user ? 'row' : 'column'};
    }
`

const UsersMessage = styled.div`
	background: #3385ff;
	border-radius: 20px 20px 0px 20px;
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    max-width: 200px;
    color: #fff;
    > div:first-child {
        padding: 10px;
    }

`

const Message = styled(UsersMessage)`
    color: #000;
	background: #f1f0f0;
	border-radius: 20px 20px 20px 0px;
`
