import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import FormInputGroup from './FormInputGroup'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router-dom'

function Create({ history }) {

    const [groupName, setGroupName] = useState('')
    const [groupDescription, setGroupDescription] = useState('')
    const [groupMembers, setGroupMembers] = useState([])
    const [complete, setComplete] = useState(false)
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

    function finishOnboarding() {
        setComplete(true)
        setTimeout(() => history.push('/'), 3000)
        const group = {
            name: groupName,
            description: groupDescription,
            members: groupMembers
        }
        localStorage.setItem('zimpla-data', JSON.stringify({
            profile: {
                name: 'starlord'
            },
            groups: [group],
            session: {
                onboardingComplete: true
            }
        }))

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

        </div>
    )

    const stage = state.currentStage === 1 ? <FirstStage key='stage-1' /> : state.currentStage === 2 ? <SecondStage key='stage-2' /> : <ThirdStage key='stage-3' />

    return (
        <Outer >
            <div className={complete ? 'onboarding' : ''}>
                <h2>Create</h2>
                <ReactCSSTransitionGroup
                    transitionName='stage'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {
                        stage
                    }
                </ReactCSSTransitionGroup>
                {
                    state.currentStage === 3 && (
                        <div style={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                            <MembersList>
                                <ReactCSSTransitionGroup
                                    transitionName="member"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={300}>

                                    <li>Members</li>
                                    {


                                        groupMembers.map((member, i) => (
                                            <li key={`${member}-${i}`}>{member}</li>
                                        ))

                                    }

                                </ReactCSSTransitionGroup>
                            </MembersList>

                            <DoneButton onClick={finishOnboarding}>Done</DoneButton>
                        </div>
                    )
                }
            </div>
        </Outer>
    )
}

export default withRouter(Create)

const Outer = styled.div`
    width: 95%;
    margin: 0 auto;
    .onboarding {
        opacity: 0.01;
        transform: translateY(-100px);
        transition: all 0.5s linear;
    }

    h2 {
        text-transform: uppercase;
        font-size: 6.4rem;
        font-weight: 500;
        color: #EEEEEE;
    }


    .stage-enter {
        transform: translateX(-300px);
        opacity: 0.01;
    }

    .stage-enter.stage-enter-active {
        transform: translateX(0px);
        opacity: 1;
        transition: all 500ms ease;
    }

    .stage-leave {
        opacity: 0;
    }

    .stage-leave.stage-leave-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
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

    .member-enter {
        transform: translateY(-20px);
        opacity: 0.01;
    }

    .member-enter.member-enter-active {
        transform: translateY(0px);
        opacity: 1;
        transition: all 500ms ease;
    }

    .member-leave {
        opacity: 0;
    }

    .member-leave.member-leave-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }

`