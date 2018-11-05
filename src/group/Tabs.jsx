import React, { useState } from 'react'
import styled from 'styled-components'
import { fadeIn } from '../shared/animations'
export default function Tabs() {

    const [activeTab, setActiveTab] = useState('goals')

    function handleTabClick(tab) {
        setActiveTab(tab)
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
        width: 6.7rem;
    }

    hr:last-child {
        width: 3.35rem;
    }
`

const Tab = styled.div`
        font-size: 1.8rem;
        text-transform: uppercase;
        text-align: center;
        font-weight: ${props => props.active ? '600' : '500'};
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

