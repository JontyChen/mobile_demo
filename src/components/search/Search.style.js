import styled from 'styled-components'

const SearchContainer = styled.div `
    .container{
        height:51px;
        width:100%;
        background:#fff;
        .input-container{
            display:flex;
            justify-content:center;
            align-items:center;
            /* vertical-align:middle;
             */
             /* line-height:51px; */
            padding-top:8px;
            .input{
                width:293px;
                height:34px;
                background:#F5F5F5;
                border-radius:17px;
                /* text-align:center; */
                display:flex;
                /* vertical-align:middle; */
                justify-content:center;
                align-items:center;
                img{
                    height:18px;
                    width:18px;
                    /* line-height:34px; */
                    vertical-align:middle;
                }
                span{
                    font-size:14px;
                    color:#999;
                    padding-left:5px;
                    line-height:34px;
                }
            }
            .img{
                width:27px;
                height:20px;
                padding-left:15px;
                img{
                    width:27px;
                    height:20px;
                }
            }
        }
    }

   

`

export {
    SearchContainer
}