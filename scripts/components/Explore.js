'use strict';

import React from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import { Navigation } from 'react-router';

const Explore = React.createClass({
  mixins: [LinkedStateMixin, Navigation],

  getInitialState() {
    return {
      loginOrRepo: 'gaearon'
    };
  },

  render() {
    return (
      <div className='Explore'>
        <p>Type a username or repo full name and hit 'Go':</p>
        <input valueLink={this.linkState('loginOrRepo')}
               onKeyUp={this.handleKeyUp} />
        <button onClick={this.handleGoClick}>Go!</button>
        <p>Code on <a href='https://github.com/gaearon/flux-react-router-example' target='_blank'>Github</a>.</p>
      </div>
    );
  },

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleGoClick();
    }
  },

  handleGoClick() {
    this.transitionTo('/' + this.state.loginOrRepo);
  }
});

export default Explore;
