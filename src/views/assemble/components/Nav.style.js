import styled from 'styled-components'

const NavContainer = styled.div`
    height:45px;
    background:#fff;
    font-family: "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    margin-bottom:2px;
    .nav{
        display:flex;
        padding: 0 21px;
        line-height:45px;
        overflow-x:auto;
        white-space: nowrap;
        /* overflow:hidden; */
        li{
            /* width:100%; */
            line-height:45px;
            font-size:14px;
            color:#666;
            span{
                display:inline-block;
                /* width:100%; */
                margin: 0 20px;
                line-height:44px;
            }
        }
    }

    .active{
        color:#fe4070;
        border-bottom:2px solid #fe4070;
        /* padding-bottom:10px; */
    }
`

export{
    NavContainer
}