import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import profile from '../img/starlord.png'
import ProfilePhoto from '../shared/ProfilePhoto'

function Header({ history }) {
  return (
    <Outer>
      <Container>
        <div>
          <ProfilePhoto photo={profile} name="starlord" />
          <p>Starlord</p>
        </div>
        <h1 onClick={() => history.push('/')}>Zimpla</h1>
      </Container>
    </Outer>
  )
}

export default withRouter(Header)

const Outer = styled.div`
  border-bottom: 1px solid #cacaca;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  > div:first-child {
    display: flex;
    text-transform: uppercase;
    font-weight: bold;
  }

  h1 {
    font-size: 4.8rem;
    font-family: 'Permanent Marker', cursive;
    cursor: pointer;
  }
`
