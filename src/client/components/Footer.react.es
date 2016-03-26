'use strict';

import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a className="github-button"
              href="https://github.com/yankouskia/Shop"
              data-icon="octicon-star"
            >
              Star
            </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
