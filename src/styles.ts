import styled,{css} from 'styled-components'

interface SpanProps {
    clientX: number,
    clientY: number,
    color:string
}

export  const AppContainer = styled.div`
width: 100vw;
height: 100vh;
position: relative;
`
export  const AppPointer = styled.span<SpanProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  border:1px solid #252525;
  ${(props) => css`
    background-color: #${props.color};
    transform: translate(${props.clientX}px,${props.clientY}px);
  `}

`
