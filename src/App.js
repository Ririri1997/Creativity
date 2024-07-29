import React from 'react';
import './App.scss';
import Home from './views/pages/home/Home';
import { CreativityContext } from './context/CreativityContext';
import { Route, Routes } from 'react-router-dom';
import Policy from './views/pages/policy/Policy';
import ScrollToTop from './utils/ScrollToTop';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: {
        services: {
          text: 'услуги',
          link: '#services'
        },
        cases: {
          text: 'кейсы',
          link: '#cases'
        },
        team: {
          text: 'команда',
          link: '#team'
        },
      },
    }
  }

  render() {
    return (
      <CreativityContext.Provider value={{ state: this.state }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/policy" element={<Policy />} />
        </Routes>
        <ScrollToTop />
      </CreativityContext.Provider>
    );
  }
}



export default App;
