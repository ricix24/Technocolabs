import React from 'react';
import { text } from 'stream/consumers';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e)=>{
    text=e.target.value;
    this.handleClick(text);
  }
  render() {
    return (
      <form onClick={chooseVideo}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}