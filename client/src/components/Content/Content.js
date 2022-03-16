import React, { Component } from 'react'
import Home from '../../routes/Home/Home';
import Services from '../../routes/Services';
import Book from '../../routes/Book';
import Contact from '../../routes/Contact';

export default class Content extends Component {
    RenderPage(content){
        if(content === "home"){
            return <Home />
        }
        else if(content === "services"){
            return <Services />
        }    
        else if(content === "book"){
            return <Book />
        }
        else if(content === "contact"){
            return <Contact />
        }
    }


  render() {
    return (
        <main>
            {this.RenderPage(this.props.content)}
        </main>
    )
  }
}
