import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import * as styles from '../shared/styled'
import PageHeading from '../shared/PageHeading'
import GroupSymbol from '../shared/GroupSymbol'
import Tabs from './Tabs'
import Members from './Members'
import Messages from './Messages'
import Goals from './Goals'


function Group({ match }) {
    const { id } = match.params
    const appData = JSON.parse(localStorage.getItem('zimpla-data'))
    const group = appData.groups.find(group => group.id === id)
    const [groupData, setGroup] = useState(group)
    const [visibleTab, setVisibleTab] = useState('goals')

    function saveAppData(newData) {
        const currentData = JSON.parse(localStorage.getItem('zimpla-data'))
        localStorage.setItem('zimpla-data', JSON.stringify({
            ...currentData,
            ...newData
        }))
    }

    function handleGroupChange(changes) {
        let updatedGroup = appData.groups.find(group => group.id === id)
        updatedGroup = { ...updatedGroup, ...changes }

        const updatedGroups = appData.groups.map(group => {
            if (group.id === id) {
                return { ...group, ...changes }
            }
            return group
        })

        setGroup(updatedGroup)
        saveAppData({ groups: updatedGroups })
    }

    function handleGoalsChanges(goalsData) {
        handleGroupChange({ goals: goalsData })
    }

    function handleMessagesChanges(messagesData) {
        handleGroupChange({ messages: messagesData })
    }

    return (
        <Outer>
            <GroupHeader>
                <GroupHeading>
                    <PageHeading>{groupData && groupData.name}</PageHeading>
                    <p>{groupData && groupData.description}</p>
                </GroupHeading>
                <GroupSymbol />
            </GroupHeader>

            <Tabs onTabChange={(tab) => setVisibleTab(tab)} />
            <TabContent isVisible={visibleTab === 'messages'}>
                <Messages messages={groupData.messages} onMessagesChanges={handleMessagesChanges} members={groupData.members} />
            </TabContent>

            <TabContent isVisible={visibleTab === 'goals'}>
                <Goals
                    goals={groupData.goals}
                    members={groupData.members}
                    onGoalsChanges={handleGoalsChanges}
                />
            </TabContent>

            <TabContent isVisible={visibleTab === 'members'}>
                <Members members={groupData.members} />
            </TabContent>


        </Outer>
    )
}

const Outer = styled(styles.PageWrapper)`
`

const GroupHeader = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    justify-content: center;
    margin: 3rem 0px;
    > h2:first-child {
        margin-right: 4rem;
    }
`
const GroupHeading = styled.div`
    h2 {
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 500;
    color: ${props => props.theme.colors.greyMedium};
    margin-bottom: 0px;
    margin-top: 15px;
    margin-right: 15px;
    }
    p {
        margin: 0px;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${props => props.theme.colors.greyMedium};
    }
`

const TabContent = styled.div`
    display: ${props => props.isVisible ? 'block' : 'none'};
    min-height: 250px;
`

export default withRouter(Group)