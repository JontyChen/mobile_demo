import styled from 'styled-components'

const NewItemContainer = styled.div`
    margin-top:10px;
    background:#fff;
    .wrapper{
        background:#fff;
       
        .title{
            height:40px;
            text-align:center;
            /* margin:0 auto; */
            padding-top: 11px;
            img{
                display:inline-block;
                width: 15px;
                height:15px;
                
            }
            span{
                margin-left:10px;
                font-size: 12px;
                color:#333;
                font-family:"微软雅黑";
            }
        }

        .container{
            background:#fff;
            height:250px;
            .big_img{
                height:188px;
                img{
                    display:inline-block;
                    height:188px;
                }
            }
            .mes{
                height:66px;
                display : flex;
                justify-content:center;
                align-items:center;
                .mes_left{
                    font-family:'微软雅黑';
                    flex:1;
                    margin-left:15px;
                    span{
                        padding-bottom: 5px;
                        display: inline-block;
                        font-size:14px;
                        color:#333;
                    }
                    p{
                        font-size:12px;
                        color:#666;
                    }
                }
                .mes_right{
                    height:37px;
                    width:73px;
                    margin-right: 15px;
                    img{
                        height:37px;
                        width:73px;
                    }
                }
            }
        }



    }
   
`
export{NewItemContainer}