import React, {Component} from 'react';

import NoticeList from './notice/notice-list.component.js';
import StoryList from './story/story-list.component.js';
import IntroduceList from './introduce/introduce-list.component.js';
import './css/mymain.css';

export default class MyMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="parent">
        <NoticeList />
        <StoryList />
        <IntroduceList />
      </div>
    );
  }
}
