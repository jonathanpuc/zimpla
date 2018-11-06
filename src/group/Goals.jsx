import React, { useReducer } from 'react'
import Goal from './Goal'
import EmptyState from './EmptyState'
export default function Goals({ goals, members, onGoalsChanges }) {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'UPDATE_GOAL':
                return {
                    ...state,
                    goals: action.payload
                }
            default:
                return {
                    ...state
                }
        }
    }, { goals })

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

    return (
        <div>
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
                                key={goal.id} />
                        )
                    })
            }
        </div>
    )
}