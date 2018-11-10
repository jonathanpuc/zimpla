import React, { useReducer, useState } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'
import Goal from './Goal'
import EmptyState from './EmptyState'
import GoalModalContent from './GoalModalContent'
import './modal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '70%',
        paddingBottom: '0px'
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
                        goalId: action.payload
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
    }, { goals, modal: { showing: false, component: '', goalId: '' } })

    function handleEditGoal(id, changes) {
        const updatedGoals = state.goals.map(goal => {
            if (goal.id === id) {
                return { ...goal, ...changes }
            }
            return goal
        })
        dispatch({ type: 'UPDATE_GOAL', payload: updatedGoals })
        onGoalsChanges(updatedGoals)
        if (state.modal.showing && state.modal.goalId === id) {
            console.log('yep')
            const updatedGoal = updatedGoals.find(goal => goal.id === id)
            console.log(updatedGoal)
            setModalGoal(updatedGoal)
        }
    }

    function showModal(component, goalId = false) {
        if (component && goalId) {
            const modalGoal = state.goals.find(goal => goal.id === goalId)
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
                    <GoalModalContent
                        creator={members.find(member => member.name === modalGoal.createdBy)}
                        {...modalGoal}
                        members={members}
                        onCloseModal={closeModal}
                        onEditGoal={handleEditGoal}
                    />
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