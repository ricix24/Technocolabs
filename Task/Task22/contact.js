import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }


  render() {
    let headerText;
    if(this.state.authorized)
    {
      headerText = 'Contact';
    }
    else
    {
      headerText = 'Enter your Password';
    }
    let login =(
      <form action='#' onSubmit={this.authorize}>
        <input type='password' placeholder='Password'/>
        <input type='submit'/>
      </form>
    );
    const contactInfo =(
      <ul>
        <li>client@example.com</li>
        <li>555.555.5555</li>
      </ul>
    );
    let displayContent;
    if(this.state.authorized)
    {
      displayContent = contactInfo;
    }
    else
    {
      displayContent = login;
    }
    return (
      <div id="authorization">
        <h1>{headerText}</h1>
        {displayContent};
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);