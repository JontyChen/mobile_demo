import styled from 'styled-components'

const SelectedActivitiesContainer = styled.div`
    margin-top: 10px;
    background:#fff;
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
            display:flex;
            /* height:188px; */
            /* width:185px; */
            flex-direction: row;
            .img{
                /* height:188px; */
                /* flex:1; */
                width:186px;
                img{
                    display:inline-block;
                    /* height:188px; */
                    width:186px;
                }
            }
            .right{
                margin-right:0px;
            }

        }
    }
`
export {
    SelectedActivitiesContainer
}