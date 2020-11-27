import styled from 'styled-components'

const PreferenceContainer = styled.div`
background:#fff;
margin-top:2px;
    .wrapper{
        background:#fff;
        height:100%;
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
            /* height:188px; */
            .img{
                height:188px;
                img{
                    display:inline-block;
                    height:188px;
                }
            }

        }
    }
`

export {
    PreferenceContainer
}