import React from 'react';
import './App.css';
import {SearchRepoListContainer} from './components/SearchRepoListContainer'
import {BookMarkedRepos} from './components/BookMarkedRepos'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={SearchRepoListContainer}/>
        <Route exact path='/bookmarked-repos' component={BookMarkedRepos}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
