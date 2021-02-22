import React, { useState, useEffect } from 'react'
import './App.css';
import CountryList from './Components/country-list';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './Components/reducer'
import ActionList from './Components/action-list';
import Header from './Components/header'
import CountryPage from './Components/country-page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: '',
}



const store = createStore(reducer, initialState)

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  return (
    <main className={mainClass}>
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route exact path="/">
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
