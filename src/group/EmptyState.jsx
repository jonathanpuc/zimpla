import React from 'react'
import styled from 'styled-components'

export default function EmptyState({ children }) {
    return (
        <Outer>{children}</Outer>
    )
}

const Outer = styled.div`
    padding: 8rem 0;
    font-family: 'Libre Baskerville';
    font-size: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`