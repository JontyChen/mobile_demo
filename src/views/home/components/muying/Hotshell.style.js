import styled from 'styled-components'

const HotshellContainer = styled.div `
    margin-top:10px;
    background:#fff;
    height:100%;
    .wrapper{
            height:100%;
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
            height:188px;
            .item-list{
                height:100%;
                display:flex;
                .item{
                    width:25%;
                    /* background:red; */
                    img{
                        width:100%;
                    }
                }
            }
        }
    }
`

export {
    HotshellContainer
}