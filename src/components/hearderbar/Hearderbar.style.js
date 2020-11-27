import styled from 'styled-components'

const HearderbarContainer = styled.div`
    height:44px;
    background:#fff;
    .container{
        /* display:flex; */
        /* flex-direction: inherit; */
        position: relative;
        .left{
            /* flex:1;
             */
            height: 44px;
            width:41px;
            /* background:red; */
            /* float:left; */
            position: absolute;
            padding-top:15px;
                text-align:center;
            img{
                display:inline-block;
                height: 15px;
                width:8px;
            }
        }
        .item{
            height: 44px;
            width:293px;
            /* background:blue; */
            position: absolute;
            margin-left:41px;
            text-align:center;
            span{
                line-height:44px;
                font-size:16px;
                font-family:'微软雅黑';
                text-align:center;
            }
        }
        .right{
            /* flex:1; */
            height: 44px;
            width:41px;
            /* background:green; */
            /* float:right; */
            position: absolute;
            margin-left:334px;
            text-align:center;
            margin-top:12px;
            img{
                width:20px;
                height: 20px;
            }
        }
    }
`
export {
    HearderbarContainer
}