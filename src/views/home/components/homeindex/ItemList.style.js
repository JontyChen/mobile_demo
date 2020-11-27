import styled from 'styled-components'

const ItemListContainer = styled.div `
    height:130px;
    /* background:blue; */
    .img_url{
        height: 130px;
        img{
            width:100%;
            display:inline-block;
            height: 130px;
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
        .item-comment{
            color:#999;
            margin-top:10px;
        }
    }
`
export {
    ItemListContainer
}