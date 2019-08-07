import React, {Component} from 'react';

export default class IntroduceList extends Component {
  constructor(props) {
    super(props);

	  
    this.state = {
      title: '',
      article: '',
      author: '',
      notices: [
        {
          title: 'Introduce1',
          article: 'this is test notice MF',
          author: 'MF',
        },
        {
          title: 'Introduce2',
          article: 'who the hell?',
          author: 'god',
        },
        {
          title: 'Introduce3',
          article: 'this is hard but fun',
          author: 'YJD',
        },
      ],
    };
  }

  render() {
    return (
      <div>
	      <h4>Introduce</h4>
        <ul>
          {this.state.notices.map(listItem => {
            return <li key={listItem.title}>{listItem.title}</li>;
          })}
	    <li>{this.state.notices.map(listItem => {
	    return listItem.title})}</li>
          <li>3</li>
        </ul>
      </div>
    );
  }
}
