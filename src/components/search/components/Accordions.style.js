import styled from 'styled-components'

const AccordionsContainer = styled.div`
    background:#fff;
    overflow-y:auto;
    height: 100%;
    /* overflow:hidden; */
    ul{
        li{
            /* height: 45px; */
            line-height:45px;
            padding-left:15px;
            border-bottom: solid 1px #eee;
            position: relative;
            span{
                font-size:14px;
                color:#666;
                font-family:'微软雅黑';
            }
            i{
                position: absolute;
                display:inline-block;
                width:9px;
                height: 9px;
                background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOCAYAAAFGCjzVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQhJREFUeNpiPHPmzH8GBgZGBgj4z2RsbAzigAT/g9gAAcT4//9/hrNnz4KlmRiQAEAAwWSQ9TPAtIFVQs1igJrHAFMIEEBgnSAAMxcGUMxHNhKbBNheJmyCIAZAAMFdB3MEul1YNDLAHQbVgO41BnTfAA1HdTQWL/9HchbcMIAAYgQFPJJiQs5DhALUWcQASEwgBQAhjXD/okQfHo0oAcSEJxCwasCIchyhhxEF2JIDIz4NIAAQoHQyWAEABGGogv//y4WQh5bSLI9GvlybLq8jSRpfcHUQ2jsFPoKOWYYNBwY025AFoIRbLkCy8lIH4DnaNsICL44CSD/GCDkUAlydyy8oA9KAqAmEu34URg/ySAAAAABJRU5ErkJggg==) no-repeat;
                background-size:contain;
                line-height:45px;
                margin-right:10px;
                right:10px ;
                /* align-items:center; */
                margin-top:18px;
            }
            ul{
                /* position: absolute; */
                /* position: fixed; */
                margin-left:-15px;
                overflow-y:auto;
                color:#666;
                li{
                    background:#f5f5f5;
                    padding-left:30px;
                    span{
                        color:#666;
                    }
                }
            }
        }
        .active{
            /* color:#fe4070; */
            .span{
                color:#fe4070;
            }
            
            i{
                background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAMCAYAAACNzvbFAAAAAXNSR0IArs4c6QAAANpJREFUKBWdk00KwjAQhWcCla4FT1G8guBKXHsH9y49gcvuPYLgWlwVvENPIbguCh3zAkrSn0x0NtMh732ZJFOmhJDVbkov3lAmZ76WD81iNIGs9zN60k3a9ugyaiWiUAdsmkpECiaySQpCrYBHoQGQuSbmOducAh6E9oB5vuSqrAk5AWxPFcYg8HK4f1TaOnQBNMUAk6b7QjUhYH7E9A4aE/ig7veYj91gYw4xNnhlPIZ3h11Qt+6BJ7Qw+FP+BWID14A/FZZnyGQnNmZLdodfOvQ7dj74wbG8N1dpyKDwloYJAAAAAElFTkSuQmCC) no-repeat;
                background-size: contain;
            }
        }
    }
`
export{
    AccordionsContainer
}