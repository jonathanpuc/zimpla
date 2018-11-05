import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import * as styles from '../shared/styled'
import PageHeading from '../shared/PageHeading'
import GroupSymbol from '../shared/GroupSymbol'
import Tabs from './Tabs'
import Goals from './Goals'

function Group({ match }) {

    const [group] = useState(() => {
        const { id } = match.params
        const data = JSON.parse(localStorage.getItem('zimpla-data'))
        const group = data.groups.find(group => group.id === id)
        return group
    })

    return (
        <Outer>
            <GroupHeader>
                <GroupHeading>
                    <PageHeading>{group && group.name}</PageHeading>
                    <p>{group && group.description}</p>
                </GroupHeading>
                <GroupSymbol />
            </GroupHeader>
            <Tabs />
            <Goals goals={group.goals} members={group.members} />
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
    font-size: 5.4rem;
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

export default withRouter(Group)