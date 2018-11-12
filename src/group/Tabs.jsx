import React, { useState } from 'react'
import styled from 'styled-components'
import { fadeIn } from '../shared/animations'
export default function Tabs({ onTabChange }) {

    const [activeTab, setActiveTab] = useState('goals')

    function handleTabClick(tab) {
        setActiveTab(tab)
        onTabChange(tab)
    }

    function activeUnderline() {
        return (
            <UnderlineWrapper>
                <hr />
                <hr />
            </UnderlineWrapper>
        )
    }

    return (
        <Outer>
            <Tab active={activeTab === 'messages'} onClick={() => handleTabClick('messages')}><p>Messages</p>{activeTab === 'messages' && activeUnderline()}</Tab>
            <Tab active={activeTab === 'goals'} onClick={() => handleTabClick('goals')}><p>Goals</p>{activeTab === 'goals' && activeUnderline()}</Tab>
            <Tab active={activeTab === 'members'} onClick={() => handleTabClick('members')}><p>Members</p>{activeTab === 'members' && activeUnderline()}</Tab>
        </Outer>
    )
}

const Outer = styled.div`
    display: flex;
    justify-content: space-between;
`

const UnderlineWrapper = styled.div`
    
    hr:first-child {
        border-style: solid;
        width: 6.7rem;
    }

    hr:last-child {
        border-style: solid;
        width: 3.35rem;
    }
`

const Tab = styled.div`
        font-size: 1.8rem;
        text-transform: uppercase;
        text-align: center;
        font-weight: ${props => props.active ? '600' : '500'};
        color: ${props => props.active ? 'inherit' : `${props.theme.colors.grey}`};
        
        cursor: pointer;
        p {
            margin-bottom: 0px;
        }

        hr {
            animation: ${props => props.active ? fadeIn : ''};
            animation-duration: 0.5s;
            animation-timing-function: ease-in;
        }
`

