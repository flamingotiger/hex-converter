// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes.json';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isFields: false
    };
  }

  submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  changeFields = (): void => {
    this.setState(prevState => ({ isFields: !prevState.isFields }));
  };

  render() {
    const { isFields } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <h2>RGB & HEX Converter</h2>
        <form onSubmit={e => this.submit(e)} className={styles.formWrapper}>
          <div style={{ position: 'relative' }}>
            <div
              className={styles.inputWrapper}
              style={{ transform: `translateY(${isFields ? '0%' : '100%'})` }}
            >
              <div className={styles.labelName}>RGB</div>
              <input type="text" id="rgb" className={styles.inputCode} />
            </div>
            <button
              type="button"
              className={styles.changeFields}
              onClick={() => this.changeFields()}
              onKeyDown={() => {}}
            >
              <i className="fas fa-exchange-alt" style={{ fontSize: '1rem' }} />
            </button>
            <div
              className={styles.inputWrapper}
              style={{ transform: `translateY(${isFields ? '0%' : '-100%'})` }}
            >
              <div className={styles.labelName}>HEX</div>
              <input type="text" id="hex" className={styles.inputCode} />
            </div>
          </div>
          <button type="submit" className={styles.button}>
            CONVERTER
          </button>
        </form>
        {/* <Link to={routes.COUNTER}>to Counter</Link> */}
      </div>
    );
  }
}
