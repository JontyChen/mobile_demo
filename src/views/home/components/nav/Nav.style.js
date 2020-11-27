import styled from 'styled-components'

const NavContainer = styled.div `
        /* display:flex; */
        height:49px;
        background:#fff;
        line-height:49px;
        font-size:14px;
        font-family:'微软雅黑';
        margin-bottom:2px;
        ul{
            display:flex;
            li{
                flex:1;
                text-align:center;
                line-height:49px;
                display:inline-block;
                span{
            text-align:center;
            display:inline-block;
            line-height:49px;
        }
            }
        }
    /* .nav-list{
        .container{
        display:flex;
        height:49px;
        flex-direction:column;
        .container-list{
        flex:1;
        text-align:center;
        line-height:49px;
        span{
            text-align:center;
            display:inline-block;
            line-height:49px;
        }
    }
    .main{
        background:red;
        }
    } 
    }*/
    .active{
        line-height:49px;
        color:#fe4070;
        border-bottom : 2px solid #fe4070;
    }
`
export {
    NavContainer
}