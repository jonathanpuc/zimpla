import React from 'react'
import styled from 'styled-components'
import ProfilePhoto from '../shared/ProfilePhoto'
import tick from '../img/tick.png'
import tickGrey from '../img/tick-grey.png'
import chat from '../img/chat.png'
import moment from 'moment'
export default function Goal({ creator, goal, onGoalOpen }) {

    function handleGoalOpen() {
        onGoalOpen(goal.id)
    }

    return (
        <Outer onClick={handleGoalOpen}>
            <div>
                <Checkbox completed={goal.completed ? true : false}>
                    {goal.completed ? <img src={tick} alt="completed" /> : <img src={tickGrey} alt="uncompleted" />}
                </Checkbox>
                <ProfilePhoto {...creator} />
            </div>
            <GoalDescription>
                <span>{moment(goal.createdAt).format('DD/MM/YYYY')}</span>
                <p>{goal.description}</p>
            </GoalDescription>
            <Comments>
                <img src={chat} alt={`${goal.comments.length} comments`} />
                <p>{goal.comments.length}</p>
            </Comments>
        </Outer>
    )
}

const Outer = styled.div`
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
    > div:first-child {
        display: flex;
        align-items: center;
    }
    cursor: pointer;
    &:hover {
        background-color: #f9f8f8;
    }
    transition: background-color 250ms linear;
`

const Checkbox = styled.div`
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    margin-right: 1.5rem;
    background-color: ${props => props.completed ? props.theme.colors.greenFluro : '#D8D8D8'};
    img {
        width: 2.2rem;
        height: 2.5rem;
        margin-left: 0.3rem;
        margin-top: -0.3rem;
    }
`

const GoalDescription = styled.div`
    justify-self: start;
    p {
        margin-top: 0px;
    font-weight: 500;
    }

    span {
        font-size: 1.3rem;
    }
`

const Comments = styled.div`
    * {
        display: inline-block;
    }
    p {
        margin: 0px;
    }
    img {
        height: 2rem;
        width: 2rem;
        margin-right: 4px;
    }
`