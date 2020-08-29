import React, {Fragment, useCallback, useState} from 'react';
import style from './style.css';

const App = () => {
  const [name, setName] = useState('');

  const enterName = useCallback((event) => {
    if (event.target && event.target.name === 'yourName') {
      setName(event.target.value);
    }
  }, []);

  return (
    <Fragment>
      <div className="app">
        <div className="app-block">
          <div className="app-title" data-id="appTitle">
            Xsolla Summer School 2020
          </div>
          <div className="app-description" data-id="appDescription">
            Тестирование frontend
          </div>
          <div className="app-input">
            <input name="yourName" placeholder="Введите свое имя" onChange={el => enterName(el)} data-id="appInput"/>
          </div>
          <div className="app-hello-block" data-id="helloBlock">
            {name !== '' ? `Привет, ${name}` : ''}
          </div>
          <div className="app-garage-link">
            <a href="https://school.xsolla.com/garage" target="_blank" data-id="garageLink">Go to garage</a>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default App;