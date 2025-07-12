import styled,{createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
html{
  --color-primary:#f1e9e7;
  --bg-primary:#f2efeb;
  --color-secondary:#d6806a;
  --color-secondary-dark:#ca2535;
  --color-light:#fff;
  --color-dark:black;
  --primary-cta:#0000ff;
  
}
.dark{
  color:var(--color-light);
  background-color: #28231d;
}
.light{
  background-color:var(--bg-primary) ;
}
*{
    box-sizing: border-box;
    padding:0;
    margin:0;
}
.App{
  display:grid;
  grid-gap: 1rem;
  grid-template-areas: "nav nav"
  "aside main";
  background-color:#f2efeb;;

}
.aside{
  grid-area: aside;
  position:fixed;
  left:0;
  top:13vh;
 
}
.header-wrapper{
  grid-area: nav;
  position: fixed;
  top:0;
  background-color:var(--color-light) ;
}
.section{
  grid-area: main;
  display:flex;
  justify-content: space-between;
  padding-top:13vh; 
  min-height: 97.5vh;
 
}
@media only screen and (max-width:768px){
  html{
    font-size:65%;
  }
  .aside{
    display:none;
  }
  .App{
 
  grid-template-areas: "nav nav"
  "main main";
}
.section{
  justify-content: center;
}
.aside{
  position:fixed;
  left:-50%;
  transition: all 500ms linear;
  min-height:fit-content;
  display:block;
  top: 8.3vh;
  background-color: var(--bg-primary);
  z-index:10;
}
.aside-show{
  left:0;
}
}

`

export default GlobalStyle;