import styled from "styled-components";
import {GrFormPrevious} from 'react-icons/gr';
import {GrFormNext} from 'react-icons/gr';

export const BlogMainWrapper = styled.div`
display:flex;
width:100%;
flex-direction:row;
align-items:center;
justify-content:center;
`
export const BlogWrapper = styled.div`
display:flex;
margin-top:40px;
flex-direction:column;
align-items:center;
`

export const Prev = styled(GrFormPrevious)`
color: #C0A062;
cursor:pointer;
position: fixed;
top: 55%;
left:5px;
font-size:1rem;
`

export const Next  = styled(GrFormNext)`
color: #C0A062;
cursor:pointer;
position: fixed;
top: 55%;
right:5px;
font-size:1rem;

`
export const BlogImage = styled.img`
width:100%;
height:300px;
`
export const NextBlogName = styled.h4`
position: fixed;
padding:10px;
top:51%;
right:2.5%;
font-weight:500;
font-size: 1rem;
background-color: #E5E5E5;

@media (max-width: 1000px) {
  display: none;
}
`

 export const PrevBlogName = styled.h4`
 position: fixed;
 padding:10px;
 top:51%;
 left:2.5%;
 font-weight:500;
 font-size: 1rem;
 background-color: #E5E5E5;

 @media (max-width: 1000px) {
  display: none;
}
`
export const BlogTitle = styled.h3`
font-size: 0.9rem;
line-height: 1rem;
text-align: center;
letter-spacing: 0.3em;
margin:0;
color:black;
`
export const BlogDescription = styled.div`
  width:90%;
  padding:20px;
  margin:0;
  line-height:25px;
  & img {
    width: 100%;
    height: 400px;
    object-fit:contain;
  }

  & h2:first-of-type{
    display: none;
  }
  & ol:first-of-type{
    display:none;
  }
`
