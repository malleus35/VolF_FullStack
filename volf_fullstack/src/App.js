import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <MyNavbar />
        <br />
        <Route path="/" exact component={MyMain} />
        <Route path="/introduce" component={MyIntroduce} />
        <Route path="/notice" component={MyNotice} />
        <Route path="/story" component={MyStory} />
        <Route path="/faq" component={MyFaq} />
      </div>
    </Router>
  );
}

export default App;
