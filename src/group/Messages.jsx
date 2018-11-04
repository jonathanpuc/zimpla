
import * as React from 'react'
// import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components'
// import * as moment from 'moment'
// import sentMail from './sent-mail.png'

class Messenger extends React.Component {

    state = {
        messages: [],
        messageText: '',
        selectedMessage: 0
    }

    handleMessageInput = (e) => {

        this.setState({ messageText: e.target.value })
    }

    sendMessage = (e) => {
        e.preventDefault()
        const { messageText } = this.state
        if (messageText) {

            const message = {
                id: Date.now() + 1,
                user: '1',
                text: messageText,
                createdAt: Date.now(),
                seenBy: ['s', 'asd']
            }
            const messages = [...this.state.messages, message]

            this.setState({ messages, messageText: '' })
            window.scrollTo(0, document.body.scrollHeight);
        }

    }

    toggleSelectMessage = (id) => {
        this.setState({
            selectedMessage: this.state.selectedMessage !== id ? id : 0
        })
    }




    render() {

        const messages = this.state.messages.map((message, idx) => {
            if (message.user === '1') {
                return (
                    <MessageOuter>
                        {this.state.selectedMessage === message.id && (<MessageTimestamp>{moment(message.createdAt).calendar()}</MessageTimestamp>)}
                        <UsersMessage key={idx} onClick={() => this.toggleSelectMessage(message.id)} >
                            <div style={{ padding: '20px' }}>{message.text}</div>
                        </UsersMessage>
                    </MessageOuter >
                )
            } else {
                return (
                    <MessageOuter>
                        <Message>
                            {message.text}
                        </Message>
                    </MessageOuter>
                )
            }

        })
        return (
            <Outer>
                <MessageList>
                    <ReactCSSTransitionGroup
                        transitionName="message"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        {messages}
                    </ReactCSSTransitionGroup>

                </MessageList>




                <Form onSubmit={this.sendMessage}>

                    <MessageInput>
                        <div>
                            <input type='text' value={this.state.messageText} onChange={this.handleMessageInput} placeholder='Aa' />
                        </div>

                        <button type='submit'>
                            <img src={sentMail} alt="send message" />
                        </button>

                    </MessageInput>

                </Form>

            </Outer>
        )
    }
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
        padding-left: 5px;
        border-radius: 20px;
    }

    > div:first-child {
        width: 75%;
    }



        button {
            background-color: #EDEFF0;
            border-radius: 50%;
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
        }

`

const MessageList = styled.div`
    overflow: scroll;

`

const Outer = styled.div`
    background-color: #F6F5F6;
    height: 100vh;
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
  transition: all 500ms ease-in;
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
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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

`

const Message = styled.div`

	background: #3385ff;
	border-radius: .4em;


`

export default Messenger
