import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(<p>Hi, my name is {this.props.name}</p>);
  }
}

export default Example;
