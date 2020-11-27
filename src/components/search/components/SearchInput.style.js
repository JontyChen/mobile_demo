import styled from 'styled-components'

const SearchInputContainer = styled.div`
    /* background:red; */
    height: 45px;
    width:100%;
    
    .wrapper{
        height: 45px;
        width:100%;
        display :flex;
        font-family:'微软雅黑';
        border-bottom: solid 1px #eee;
        .input{
            height: 31px;
            background:#f5f5f5;
            width:243px;
            align-items:center;
            display:flex;
            /* line-height:45px; */
            margin-top:7px;
            margin-left:10px;
            border-radius:15px;
            padding-left:15px;
            .img{
                
                width:15px;
                height: 15px;
                img{
                    width:15px;
                    height: 15px;
                }
            }
            .span{
                /* display:inline-block; */
                font-size:14px;
                color:#999;
                margin-left:5px;
                span{
                    font-size:14px;
                    color:#999;
                }
            }
        }
        .back{
            flex:1;
            font-size:14px;
            color:#999;
            text-align:center;
            line-height:45px;
        }
    }
`
export {
    SearchInputContainer
}