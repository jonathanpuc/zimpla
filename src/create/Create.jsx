import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import FormInputGroup from './FormInputGroup'


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
            <FormInputGroup margin onSubmit={handleSubmit} placeholder='Group name' />
        </div>
    )

    const SecondStage = () => (
        <div>
            <Instructions>
                <p>What is the purpose of this mastermind group?</p>
                <p>In a sentence, what is this group about?</p>
            </Instructions>
            <FormInputGroup margin onSubmit={handleSubmit} placeholder='Saving the galaxy' />
        </div>
    )


    const ThirdStage = () => (
        <div>
            <Instructions>
                <p>Not much of a group if it’s just you. Let’s expand.</p>
                <p>Invite your fellow masterminds</p>
            </Instructions>
            <FormInputGroup margin onSubmit={handleSubmit} placeholder='Antman@gmail.com' invites={true} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <MembersList>
                    <li>Members</li>
                    {groupMembers.map((member, i) => (
                        <li key={`${member}-${i}`}>{member}</li>
                    ))}
                </MembersList>
                <DoneButton>Done</DoneButton>
            </div>
        </div>
    )

    return (
        <Outer>
            <h2>Create</h2>
            {
                state.currentStage === 1 ? <FirstStage /> : state.currentStage === 2 ? <SecondStage /> : <ThirdStage />
            }

        </Outer>
    )
}

const Outer = styled.div`
    width: 95%;
    margin: 0 auto;
    h2 {
        text-transform: uppercase;
        font-size: 6.4rem;
        font-weight: 500;
        color: #EEEEEE;
    }
`

const Instructions = styled.div`
    text-align: center;
    margin-bottom: 5rem;
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

const DoneButton = styled.button`
    width: 150px;
    height: 30px;
    font-size: 12px;
    font-weight: 500;
    border: none;
    text-transform: uppercase;
    color: #fff;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.orange};
`

const MembersList = styled.ul`
    padding: 10px 0px;
    width: 250px;
    max-height: 150px;
    overflow: scroll;
    border-bottom: 1px solid ${props => props.theme.colors.grey};
    text-transform: uppercase;
    > li:first-child {
        font-weight: bold;
        color: ${props => props.theme.colors.grey};
    }
    li {
    font-size: 1.2rem;
       padding: 10px; 
    }
`