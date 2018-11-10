import React from 'react'
import styled from 'styled-components'
import ProfilePhoto from '../shared/ProfilePhoto'
export default function Members({ members }) {

    return (
        <Outer>

            {members.map((member, i) =>
                <MemberBlock key={i}>
                    <ProfilePhoto photo={member.photo} name={member.name} large noMargin />
                    <p>
                        {member.name}
                    </p>
                    {member.name.includes('@') && <span>pending</span>}
                </MemberBlock>
            )}
        </Outer>
    )

}

const Outer = styled.div`
        margin: 0 auto;
        display: flex;
        margin-top: 5rem;
        flex-wrap: wrap;
    @media only screen and (min-width: 800px ) {
                width: 70%;
        }
    
        @media only screen and (min-width: 1250px ) {
                width: 60%;
        }
       
`
const MemberBlock = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0px 2rem;
    margin-top: 1.5rem;
    > p {
        text-transform: uppercase;
        margin-top: 10px;
        margin-bottom: 0px;
    }

    span {
        margin-top: 4px;
        font-size: 11px;
    }

    img {
        margin: 0 auto;
    }
`

