import React, { useReducer, useState } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'
import Goal from './Goal'
import EmptyState from './EmptyState'

import './modal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

export default function Goals({ goals, members, onGoalsChanges }) {

    const [modalGoal, setModalGoal] = useState({})

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'UPDATE_GOAL':
                return {
                    ...state,
                    goals: action.payload
                }
            case 'SHOW_CREATE_MODAL':
                return {
                    ...state,
                    modal: {
                        showing: true,
                        component: 'create'
                    }
                }
            case 'SHOW_GOAL_MODAL':
                return {
                    ...state,
                    modal: {
                        showing: true,
                        component: 'goal',
                    }
                }
            case 'HIDE_MODAL':
                return {
                    ...state,
                    modal: {
                        showing: false,
                        component: '',
                    }
                }
            default:
                return {
                    ...state
                }
        }
    }, { goals, modal: { showing: false, component: '' } })

    function handleEditGoal(id, changes) {
        const updatedGoals = state.goals.map(goal => {
            if (goal.id === id) {
                return { ...goal, ...changes }
            }
            return goal
        })
        dispatch({ type: 'UPDATE_GOAL', payload: updatedGoals })
        onGoalsChanges(updatedGoals)
    }

    function showModal(component, goalId = false) {
        if (component && goalId) {
            const modalGoal = goals.find(goal => goal.id === goalId)
            setModalGoal(modalGoal)
            console.log(modalGoal)
            dispatch({ type: 'SHOW_GOAL_MODAL', payload: goalId })
        } else {
            dispatch({ type: 'SHOW_CREATE_MODAL' })
        }
    }

    function openGoalModal(goalId) {
        showModal('goal', goalId)
    }

    function closeModal() {
        dispatch({ type: 'HIDE_MODAL' })
        setModalGoal(modalGoal)
    }

    return (
        <Outer>
            <Modal
                isOpen={state.modal.showing}
                // className='goal-modal'
                // onAfterOpen={this.afterOpenModal}
                style={customStyles}
                onRequestClose={closeModal}
                contentLabel={`Details of `}
                closeTimeoutMS={250}
            >
                {modalGoal && (
                    <>
                        <h2>{modalGoal.description}</h2>
                        <button onClick={closeModal}>close</button>
                        <div>I am a modal</div>
                    </>
                )
                }

            </Modal>

            {
                goals.length === 0 ? (
                    <EmptyState>
                        <p>Lazy, there aren't any goals. Create one.</p>
                    </EmptyState>
                ) :
                    state.goals.map((goal, i) => {
                        const creator = members.find(member => member.name === goal.createdBy)
                        return (
                            <Goal
                                onEditGoal={handleEditGoal}
                                creator={creator}
                                goal={goal}
                                key={goal.id}
                                onGoalOpen={openGoalModal}
                            />
                        )
                    })
            }
        </Outer>

    )
}

const Outer = styled.div`
    margin: 0 auto;
    @media only screen and (min-width: 800px ) {
        width: 70%;
    }

        @media only screen and (min-width: 1250px ) {
        width: 50%;
    }

    
   
`