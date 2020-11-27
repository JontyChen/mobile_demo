import styled from 'styled-components'

const HearderbarContainer = styled.div`
    height:45px;
    background:#fff;
    font-family:'微软雅黑';
    /* margin-bottom:1px solid; */
    .wrapper{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        .wrapper-left-img{
            text-align:center;
            vertical-align:middle;
            width:50px;
            height:14px;
            margin-top:7px;
            img{
                width:8px;
                height:14px;
            }
        }
        .container{
            flex:1;
            background:#f5f5f5;
            height:31px;
            border-radius:15px;
            /* align-items:center; */
            margin-top:7px;
            /* padding-top:7px; */
            display:flex;
            img{
                width:15px;
                height:15px;
                padding-left:15px;
                margin-top:8px;
            }
            input{
                font-size:14px;
                color:#999;
                border:none;
                background:transparent;
                padding-left:5px;
            }
        }
        .wrapper-right-span{
            text-align:center;
            /* vertical-align:middle; */
            margin-top:6px;
            margin-right:5px;
            width:45px;
            span{
                /* padding-left:15px; */
                font-size:14px;
                color:#999;
            }
        }
    }
`
export {
    HearderbarContainer
}