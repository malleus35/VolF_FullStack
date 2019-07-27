import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component.js';
import NoticeList from './components/notice-list.component.js';
import EditNotice from './components/edit-notice.component.js';
import CreateNotice from './components/create-notice.component.js';
import CreateUser from './components/create-user.component.js';

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
