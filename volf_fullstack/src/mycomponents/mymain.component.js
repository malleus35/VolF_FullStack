import React, {Component} from 'react';

import MyIntroduce from './myintroduce.component.js';

export default class MyMain extends Component {
  render() {
    return (
      <div>
	      <MyIntroduce />
        <p>You are on the MyMain component!</p>
      </div>
    );
  }
}
