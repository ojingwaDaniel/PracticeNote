// function MainContent(){
//     return(
//         <div>
//         <h1>hey im learning React</h1>

//         </div>
        
//     )
//     }
// ReactDom.render(
// <div>
//     <MainContent/>

// </div>,document.getElementById('root'))




// Imperative Coding//
    
const h1 = document.createElement('h1')
const div = document.getElementById('root')
h1.textContent= 'This is an imperative way of coding '
text.className('header')
div.appendChild(text)


const NavBar = (
  <nav>
    <h1>My Website</h1>
    <ul>
      <li>PRicing</li>
      <li>About</li>
      <li>COntact</li>
    </ul>
  </nav>
);
RenderDom.render(NavBar,document.getElementById('root'))



///  Challenge 2
import React from 'react'
import ReactDom from 'react-dom'

const Div = document.getElementById('root')
const StaticPage = (
    <div>
        <nav>
            <h1>My Website</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>COntact</li>
            </ul>
        </nav>
        <header>
            React a Frontend FrameWork
        </header>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <footer>
            &copy; CopyRight 2023
        </footer>

    </div>

)
Div.appendChild(StaticPage)
