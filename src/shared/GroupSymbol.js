import React from 'react'
import styled from 'styled-components'
import brain from '../img/brain.png'
export default function GroupSymbol() {
    return (
        <Outer>
            <Image src={brain} alt='group symbol' />
        </Outer>
    )
}


const Outer = styled.div`
    height: 8.5rem;
    width: 8.5rem;
    border-radius: 50%;
    border: 1px solid #FFA722;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    width: 50%;
    height: 50%;
`