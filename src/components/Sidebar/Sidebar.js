import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="leftNavigation__Wrapper-sc-11e7bjo-0 cXdfkr">
          <h3>Menu</h3>
          <div>
            <div className="leftNavigation__LabelSelect-sc-11e7bjo-1 hgGTJo">
              Contract
            </div>
          </div>
          <div>
            <div className="leftNavigation__LabelSelect-sc-11e7bjo-1 hgGTJo">
              Factory
            </div>
          </div>
          <div>
            <div className="leftNavigation__LabelSelect-sc-11e7bjo-1 hgGTJo">
              Chimney
            </div>
          </div>
          <div>
            <div className="leftNavigation__LabelSelect-sc-11e7bjo-1 hgGTJo">
              Para
            </div>
          </div>
          <div>
            <div className="leftNavigation__LabelSelect-sc-11e7bjo-1 hgGTJo">
              Data
            </div>
            <div className="leftNavigation__SubMenu-sc-11e7bjo-2 jSbGOb">
              Get Record Data
            </div>
            <div className="leftNavigation__SubMenu-sc-11e7bjo-2 kdhIax">
              Record Data
            </div>
          </div>
        </div>
      </div>
    );
  }
}
