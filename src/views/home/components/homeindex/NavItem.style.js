import styled from 'styled-components'

 const NavItemContainer = styled.div`
    height:44px;
    background:#fff;
    margin-top:2px;
    ul{
        display:flex;
        height:44px;
        justify-content:center;
        align-items:center;
        font-size:14px;
        font-family:'微软雅黑';
        color:#666;
        li{
            flex:1;
            text-align:center;
        }
    }
    .active{
        color:#fe4070;
    }

 `
export {
    NavItemContainer
}