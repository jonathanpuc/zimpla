import React, { useState } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar';
import moment from 'moment'
import Button from '../shared/Button'

export default function CreateGoalModalContent({ onCreateGoal }) {

    const [goalDescription, setGoalDescription] = useState('')
    const [date, setDate] = useState(new Date())

    function submitGoal() {
        if (
            goalDescription && date
        ) {
            const appData = JSON.parse(localStorage.getItem('zimpla-data'))
            const { name } = appData.profile
            const goal = {
                id: `${Math.random()}`,
                createdAt: moment(Date.now()).format(),
                createdBy: name,
                completed: false,
                description: goalDescription,
                deadline: moment(date).format(),
                comments: []
            }

            onCreateGoal(goal)
        }
    }

    function handleDescriptionChange(e) {
        setGoalDescription(e.target.value)
    }

    return (
        <Outer>
            <h3>Create goal</h3>
            <input type="text" placeholder='Find Captain Marvel' value={goalDescription} onChange={handleDescriptionChange} />
            <p>Deadline</p>
            <Calendar
                onChange={setDate}
                value={date}
                minDate={new Date()}
            />
            <Button onClick={submitGoal}>Done</Button>
        </Outer>
    )
}

const Outer = styled.div`
    h3 {
        margin-top: 0px;
    }
    p {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.2rem;
    }
    input {
        &::placeholder {
            color: #9B9B9B;
         }
        padding: 10px;
        font-size: 1.2rem;
        width: 70%;
    }

    .react-calendar {
        font-size: 1.4rem;
    }

    > button {
        border: none;
        background-color: ${props => props.theme.colors.orange};
        color: #fff;
        width: 15rem;
        padding: 10px;
        margin: 10px auto;
        display: block;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.3rem;
        cursor: pointer;
    }
`

