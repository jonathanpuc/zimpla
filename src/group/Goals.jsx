import React, { useReducer, useState } from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'
import Goal from './Goal'
import EmptyState from './EmptyState'
import GoalModalContent from './GoalModalContent'
import CreateGoalModalContent from './CreateGoalModalContent'
import { getContentAuthorProfile } from '../lib/helpers'
import Button from '../shared/Button'
import './modal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        maxWidth: '70%',
        paddingBottom: '0px'
    }
};

export default function Goals({ goals, members, onGoalsChanges }) {

    const [modalGoal, setModalGoal] = useState({})
    const [createModalType, setCreateModalType] = useState(false)

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'UPDATE_GOAL':
                return {
                    ...state,
                    goals: action.payload
                }
            case 'SHOW_MODAL':
                return {
                    ...state,
                    modal: {
                        showing: true,
                    }
                }
            case 'SHOW_GOAL_MODAL':
                return {
                    ...state,
                    modal: {
                        showing: true,
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
    }, { goals, modal: { showing: false, goalId: '' } })

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
            const updatedGoal = updatedGoals.find(goal => goal.id === id)
            setModalGoal(updatedGoal)
        }
    }

    function openGoalModal(goalId) {
        const modalGoal = state.goals.find(goal => goal.id === goalId)
        setModalGoal(modalGoal)
        dispatch({ type: 'SHOW_GOAL_MODAL', payload: goalId })
    }

    function openCreateModal() {
        setCreateModalType(true)
        dispatch({ type: 'SHOW_MODAL' })
    }


    function closeModal() {
        dispatch({ type: 'HIDE_MODAL' })
        setTimeout(() => {
            setCreateModalType(false)
            setModalGoal({})
        }, 250)
    }

    function handleCreateGoal(goal) {
        dispatch({ type: 'UPDATE_GOAL', payload: [...state.goals, goal] })
        onGoalsChanges([...state.goals, goal])
        closeModal()
    }

    return (
        <Outer>
            <Modal
                isOpen={state.modal.showing}
                style={customStyles}
                onRequestClose={closeModal}
                contentLabel={`Details of `}
                closeTimeoutMS={250}
            >
                {modalGoal && modalGoal.id && (
                    <GoalModalContent
                        creator={getContentAuthorProfile(modalGoal.createdBy, members)}
                        {...modalGoal}
                        members={members}
                        onCloseModal={closeModal}
                        onEditGoal={handleEditGoal}
                    />
                )
                }

                {createModalType && (
                    <CreateGoalModalContent
                        onCreateGoal={handleCreateGoal}
                    />
                )
                }


            </Modal>
            <Button onClick={openCreateModal} secondary>Create</Button>
            {
                state.goals.length === 0 ? (
                    <EmptyState>
                        <p>Lazy, there aren't any goals. Create one.</p>
                    </EmptyState>
                ) :
                    state.goals.map((goal, i) => {
                        const creator = getContentAuthorProfile(goal.createdBy, members)
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
            margin-top: 5rem;
    @media only screen and (min-width: 800px ) {
                width: 70%;
        }
    
        @media only screen and (min-width: 1250px ) {
                width: 50%;
        }
       
`
