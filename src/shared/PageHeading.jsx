import React from 'react'
import styled from 'styled-components'

export default function ({ children }) { return <Heading>{children}</Heading> }

const Heading = styled.h2`
    text-transform: uppercase;
    font-size: 6.4rem;
    font-weight: 500;
    color: #EEEEEE;
`