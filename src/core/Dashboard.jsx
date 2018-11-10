import React, { useState } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import * as styles from '../shared/styled'
import PageHeading from '../shared/PageHeading'
import GroupSymbol from '../shared/GroupSymbol'
function Dashboard({ history }) {

    const [groups] = useState(() => {
        const data = JSON.parse(localStorage.getItem('zimpla-data'))
        return data.groups
    })

    function goToGroup(id) {
        history.push(`/g/${id}`)
    }

    return (
        <Outer>
            <PageHeading>Groups</PageHeading>
            <GroupList>
                {
                    groups.map(group =>
                        <GroupAvatar key={group.id} onClick={() => goToGroup(group.id)}>
                            <GroupSymbol />
                            <p>{group.name}</p>
                        </GroupAvatar>)

                }

            </GroupList>
        </Outer>
    )
}

export default withRouter(Dashboard)

const Outer = styled(styles.PageWrapper)`

`

const GroupAvatar = styled.div`
    max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 5rem;
    cursor: pointer;
    p {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: bold;
        max-width: 70%;
    text-align: center;
    }

    &:hover {
        transform: translateY(-15px);
        
    }

    transition: all 0.5s ease;
`

const GroupList = styled.div`
    display: flex;
`