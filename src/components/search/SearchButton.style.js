import styled from 'styled-components'

const SearchButtonContainer = styled.div `
height: 100%;
 .search{
        position: fixed;
        height:100% ;
        width:100%;
        background:rgba(0,0,0,0.5);
        z-index:1000;
        top: 0;
        bottom:0;
        .searchContainer{
            position: fixed;
            background:#fff;
            height: 100%;
            width:80%;
            right:-100%;
            animation: left-to-right 0.5s;
            animation-fill-mode: forwards;

        }
    }

    @keyframes left-to-right {
        0%{ right:-100%;}
        100%{right: 0;}
    }
    
`
export {
    SearchButtonContainer
}