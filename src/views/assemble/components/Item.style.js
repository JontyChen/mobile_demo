import styled from 'styled-components'

const ItemContainer = styled.div`
    /* height:243px; */
    height:100%;
    .wrapper{
        height:243px;
        background:#fff;
        position: relative;
        margin-bottom:10px;
        .img{
            width:150px;
            height:150px;
            text-align:center;
            margin:0 auto;
            /* position: relative; */
            img{
                width:150px;
                height:150px;  
            }
            span{
                position: absolute;
                left: 0;
                top: 100px;
                z-index: 1;
                border: 3px solid #eee;
                border-left: 0;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                color: #666;
                background: rgba(251,251,251,.8);
            }
        }
        .msg{
            height:18px;
            margin-top:10px;
            padding-left:12px;
            white-space: nowrap;
            /* overflow: hidden; */
            span{
                font-size:14px;
                color:#fe4070;
            }
            p{
                display:inline-block;
                font-size:14px;
                width:280px;
                overflow:hidden;
                text-overflow:ellipsis;
            }
        }
        .price{
            height:60px;
            /* background:red; */
            .left{
                float: left;
                /* line-height:60px; */
                margin-left:10px;
                padding-top:17px;
                span{
                    color:#fe4070;
                    font-size:18px;
                }
                p{
                    color:#999;
                    font-size:12px;
                }
            }
            .right{
                float: right;
                /* vertical-align:middle; */
                padding-top:17px;
                margin-right:10px;
                span{
                    display: block;
                    height:26px;
                    border-radius:25px;
                    line-height:26px;
                    font-size:14px;
                    background:#fe4070;
                    color:#fff;
                    text-align:center;
                    width:88px;
                }
            }
        }
    }
`

export {
    ItemContainer
}