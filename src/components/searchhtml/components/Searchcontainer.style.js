import styled from 'styled-components'

const SearchcontainerContainer =styled.div`
    /* height:100%; */
    background:#fff;
    flex:1;
    margin-top:2px;
    .searchList{
        height:44px;
        .span{
            color:#333;
            font-size:16px;
            font-family:'微软雅黑';
            padding-left:30px;
            margin-left:10px;
            /* padding-top:15px; */
            background:url(http://a3.jmstatic.com/50928924cbcc6cca/search_btn.png) 5px no-repeat;
            background-size:15px 15px;;
            border-bottom:1px solid #f5f5f5;
            line-height:44px;
            span{
                line-height:44px;
            }
        }
    }
`

export {
    SearchcontainerContainer
}