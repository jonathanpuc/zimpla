import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import InputGroup from '../shared/InputGroup'


export default function Create() {

    const [groupName, setGroupName] = useState('')
    const [groupDescription, setGroupDescription] = useState('')
    const [groupMembers, setGroupMembers] = useState([])

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'NEXT_STAGE':
                return {
                    ...state,
                    currentStage: state.currentStage + 1
                }
            default:
                return {
                    ...state
                }
        }
    }, {
            currentStage: 1,
        })


    function nextStage() {
        dispatch({ type: 'NEXT_STAGE' })
    }

    function handleSubmit(value) {
        console.log(value)
        if (value) {
            switch (state.currentStage) {
                case 1:
                    setGroupName(value)
                    nextStage()
                    break
                case 2:
                    setGroupDescription(value)
                    nextStage()
                    break
                case 3:
                    setGroupMembers([...groupMembers, value])
                    break;
                default:
                    break;

            }
        }
    }


    // use the reducer api to handle stages
    const FirstStage = () => (
        <div>
            <Instructions>
                <p>Welcome back Starlord. Looking to create a new mastermind?</p>
                <p>Let's do it.</p>
            </Instructions>
            <InputGroup onSubmit={handleSubmit} placeholder='Group name' />
        </div>
    )

    const SecondStage = () => (
        <div>
            <Instructions>
                <p>What is the purpose of this mastermind group?</p>
                <p>In a sentence, what is this group about?</p>
            </Instructions>
            <InputGroup onSubmit={handleSubmit} placeholder='Saving the galaxy' />
        </div>
    )


    const ThirdStage = () => (
        <div>
            <Instructions>
                <p>What is the purpose of this mastermind group?</p>
                <p>In a sentence, what is this group about?</p>
            </Instructions>
            <InputGroup onSubmit={handleSubmit} placeholder='Antman@gmail.com' invites={true} />
        </div>
    )

    return (
        <Outer>
            <h2>Create</h2>
            {
                state.currentStage === 1 ? <FirstStage /> : state.currentStage === 2 ? <SecondStage /> : <ThirdStage />
            }
            {
                state.currentStage === 3 && (
                    <div>
                        <button>Done</button>

                        <div>
                            <p>Members</p>
                            <ul>
                                {groupMembers.map((member, i) => (
                                    <li key={`${member}-${i}`}>{member}</li>
                                ))}
                            </ul>

                        </div>
                    </div>
                )
            }
        </Outer>
    )
}

const Outer = styled.div`
    h2 {
        text-transform: uppercase;
        font-size: 6.4rem;
        font-weight: 500;
        color: #EEEEEE;
    }
`

const Instructions = styled.div`
    text-align: center;
    p {
        font-family: 'Libre Baskerville';
        font-weight: bold;
        font-size: 2rem;
    }

    p:last-child {
        font-weight: 300;
        font-size: 1.7rem;
    }
`