import React from 'react';
import styled from 'styled-components'
import profile from '../img/starlord.png'

export default function Header() {
    return (
        <Outer>
            <Container>
                <div>
                    <img src={profile} alt="profile" />
                    <p>Starlord</p>
                </div>
                <h1>Zimpla</h1>
            </Container>
        </Outer>
    )
}

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
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 1px solid #c5c5c5;
      margin-right: 1rem;
    }
  }

  h1 {
    font-size: 4.8rem;
    font-family: 'Permanent Marker', cursive;
  }
`
