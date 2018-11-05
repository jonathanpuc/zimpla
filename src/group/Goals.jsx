import React from 'react'
import Goal from './Goal'
export default function Goals({ goals, members }) {
    console.log(goals)
    return (
        <div>
            {goals.map((goal, i) => {
                const creator = members.find(member => member.name === goal.createdBy)
                return (
                    <Goal creator={creator} goal={goal} key={i} />
                )
            })}

        </div>
    )
}