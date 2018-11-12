import React from 'react'
import styled from 'styled-components'
export default function GoalCompleteButton({ completed, onToggle }) {

    return (
        <Outer completed={completed} onClick={onToggle}>
            {completed ? 'Completed' : 'Pending'}
        </Outer>
    )
}

const Outer = styled.button`
    font-family: 'Permanent Marker', cursive;
    color: ${props => props.completed ? '#fff' : '#FFA722'};
    background-color: ${props => props.completed ? '#29DA98' : '#fff'};
    border: ${props => props.completed ? '1px solid #29DA98' : '1px solid #a1a1a1;'};
    border-radius: 5px;
    transition: 
    color 400ms 200ms ease,
    background-color 500ms ease;
    text-transform: uppercase;
    width: 120px;
    padding: 5px;
    cursor: pointer;
`