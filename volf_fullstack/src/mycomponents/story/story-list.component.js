import React, {Component} from 'react';

export default class StoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      article: '',
      author: '',
      notices: [
        {
          title: 'story1',
          article: 'this is test notice MF',
          author: 'MF',
        },
        {
          title: 'story2',
          article: 'who the hell?',
          author: 'god',
        },
        {
          title: 'story3',
          article: 'this is hard but fun',
          author: 'YJD',
        },
      ],
    };
  }

  render() {
    return (
      <div className="list">
	      <h4>Story</h4>
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
