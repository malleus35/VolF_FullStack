import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component.js';
import NoticeList from './components/notice-list.component.js';
import EditNotice from './components/edit-notice.component.js';
import CreateNotice from './components/create-notice.component.js';
import CreateUser from './components/create-user.component.js';

import MyNavbar from './mycomponents/mynavbar.component.js';
import MyMain from './mycomponents/mymain.component.js';
import MyIntroduce from './mycomponents/myintroduce.component.js';
import MyNotice from './mycomponents/mynotice.component.js';
import MyStory from './mycomponents/mystory.component.js';
import MyFaq from './mycomponents/myfaq.component.js';
import MyAdmin from './mycomponents/myadmin.component.js';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={NoticeList} />
        <Route path="/edit:id" component={EditNotice} />
        <Route path="/create" component={CreateNotice} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
