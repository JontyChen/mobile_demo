import styled from 'styled-components';

const BannerContainer =styled.div`
    background:#fff;
    height:107px;
    margin-top:2px;
    .container{
        background:#fff;
        height:107px;
        ul{
            /* background:#fff; */
            height:107px;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            li{
                flex:1;
                font-family:'微软雅黑';
                font-size: 12px;
                color:#666;
                .img{
                    display:inline-block;
                    width:48px;
                    height:47px;
                }
                .span{
                    margin-top:5px;
                }
            }
        }

    }
`
export {
    BannerContainer
}