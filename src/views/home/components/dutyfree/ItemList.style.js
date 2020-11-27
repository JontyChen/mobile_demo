import styled from 'styled-components'

const ItemListContainer = styled.div`
    margin-top:10px;
    background:#fff;
    height:100%;
    .wrapper{
        background:#fff;
        height:100%;
        .title{
            height:40px;
            text-align:center;
            /* margin:0 auto; */
            padding-top: 12px;
            img{
                display:inline-block;
                width: 15px;
                height:15px;
            }
            span{
                font-size: 12px;
                color:#333;
                font-family:"微软雅黑";
                margin-left:19x;
            }
        }
        .container{
        /* display:flex; */
        position: relative;
        height: 130px;
    }
    .item-img{
        height:100%;
        position: absolute;
        img{
            height:130px;
            /* width:130px; */
            position: relative;
        }
    }
    .item-message{
        height:130px ;
        width:203px;
        /* background:red; */
        /* float:right; */
        position: absolute;
        margin-left:160px;
        font-family:'微软雅黑';
        /* flex:1; */
        /* position: relative; */
        .item-message-title{
            color:#333;
            font-size:13px;
            margin:13px 0 5px;
            height: 34px;
        }
        .item-price{ 
            margin-top:28px;
            height:14px ;
            display:flex;
            
            .newPrice{
                color:#fe4070;
               font-size:20px;
                    p{
                        font-size:12px;
                        display:inline-block;
                    }
            }
            .oldPrice{
                padding-top:7px;
                font-size:12px;
                margin-left:3px;
                color:#999;
                text-decoration: line-through;
                    p{
                        font-size:12px;
                        display:inline-block;
                    }
            }
        }
    }
}
`

export {
    ItemListContainer
}