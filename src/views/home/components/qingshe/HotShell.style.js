import styled from 'styled-components'

const HotShellContainer = styled.div `
    width:100%;
    /* height:375px; */
    .title{
            background:#fff;
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
    .img_1{
        width:100%;
        img{
            display:inline-block;
            width:100%;
        }
    }
    .img_2{
        width:100%;
        img{
            display:inline-block;
            width:50%;
        }
    }
`
export {
    HotShellContainer
}