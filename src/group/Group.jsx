import React, { lazy, Suspense, useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import * as styles from '../shared/styled'
import PageHeading from '../shared/PageHeading'
import GroupSymbol from '../shared/GroupSymbol'
import Tabs from './Tabs'
import Members from './Members'

const Goals = lazy(() => import('./Goals'))

function Group({ match }) {
    const { id } = match.params
    const appData = JSON.parse(localStorage.getItem('zimpla-data'))
    const group = appData.groups.find(group => group.id === id)
    const [visibleTab, setVisibleTab] = useState('goals')

    function saveAppData(newData) {
        const currentData = JSON.parse(localStorage.getItem('zimpla-data'))
        localStorage.setItem('zimpla-data', JSON.stringify({
            ...currentData,
            ...newData
        }))
    }

    function handleGroupChange(changes) {
        const updatedGroups = appData.groups.map(group => {
            if (group.id === id) {
                return { ...group, ...changes }
            }
            return group
        })

        saveAppData({ groups: updatedGroups })

    }
    function handleGoalsChanges(goalsData) {
        console.log(goalsData)
        handleGroupChange({ goals: goalsData })
    }

    return (
        <Outer>
            <GroupHeader>
                <GroupHeading>
                    <PageHeading>{group && group.name}</PageHeading>
                    <p>{group && group.description}</p>
                </GroupHeading>
                <GroupSymbol />
            </GroupHeader>

            <Tabs onTabChange={(tab) => setVisibleTab(tab)} />
            <TabContent isVisible={visibleTab === 'messages'}>
                <div>Messages</div>

            </TabContent>

            <TabContent isVisible={visibleTab === 'goals'}>
                <Suspense fallback={<div>Loading</div>}>
                    <Goals
                        goals={group.goals}
                        members={group.members}
                        onGoalsChanges={handleGoalsChanges}
                    />
                </Suspense>
            </TabContent>

            <TabContent isVisible={visibleTab === 'members'}>
                <Members members={group.members} />
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