import React, {Component} from 'react';

export default class NoticeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      article: '',
      author: '',
      notices: [
        {
          title: 'test1',
          article: 'this is test notice MF',
          author: 'MF',
        },
        {
          title: 'test2',
          article: 'who the hell?',
          author: 'god',
        },
        {
          title: 'asdfasdf',
          article: 'this is hard but fun',
          author: 'YJD',
        },
      ],
    };
  }

  render() {
    return (
      <div>
	      <h4>Notice</h4>
        <ul>
          {this.state.notices.map(listItem => {
            return <li key={listItem.title}>{listItem.title}</li>;
          })}
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    );
  }
}
