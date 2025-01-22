import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  pedding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-templade-columns: 224px auto;
`

export default EstiloGlobal
