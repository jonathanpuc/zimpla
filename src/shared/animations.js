import { keyframes } from 'styled-components'
export function fadeUp() {
    return keyframes`
    from {opacity: 1; transform: translateY(100px)}
    to {opacity: 0;, transform: translateY(-1000px)}
    `

}

export function fadeIn() {
    return keyframes`
        from {opacity: 0;}
        to {opacity: 1;}
    `
}

// export function dropDown() {
//     return keyframes` {
//         0% {
//           transform: translate(-50%, -1000%);
//         }

//         50% {
//           transform: translate(-50%, -40%);
//         }

//         100% {
//           transform: translate(-50%, -50%);
//         }


//       }`
// }