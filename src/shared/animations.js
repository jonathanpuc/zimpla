import { keyframes } from 'styled-components'
export function fadeUp() {
    return keyframes`
    from {opacity: 1; transform: translateY(100px)}
    to {opacity: 0;, transform: translateY(-1000px)}
    `

}
