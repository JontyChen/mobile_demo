import styled from 'styled-components'

const TwoPhotoContainer = styled.div`
    margin-top:10px;
    background:#fff;
    height:94px;
    .wrapper{
        height:94px;
        width:100%;
        display:flex;
        .item{
            height:94px;
            flex:1;
            /* border:1px solid #333; */
            width:187px;
            border-radius:10px;
            img{
                display:inline-block;
                height:94px;
            }
        }
    }
`
export{
    TwoPhotoContainer
}