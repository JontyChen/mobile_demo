import styled from 'styled-components'

const HomeContainer = styled.div `
    height: 100%;
    margin-top:2px;
    .container{
        display:flex;
        flex-direction:column;
        height: 100%;
        Nav{
            height: 50px;
        }
        Main{
            flex:1;
        }
    }
`

export {
    HomeContainer
}