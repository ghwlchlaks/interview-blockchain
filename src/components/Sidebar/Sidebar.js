import React, { Component } from 'react';
import './Sidebar.css';
import { datas } from '../../datas/Factory';

export default class Sidebar extends Component {
  makeMenu() {
    let row = [];
    for (let data in datas) {
      row.push(
        <div key={data}>
          <div className="leftNavigation__LabelSelect-sc-11e7bjo-1 SDYKW">
            {data}
          </div>
          {datas[data].map((value, index) => {
            return (
              <div
                className="leftNavigation__SubMenu-sc-11e7bjo-2 kdhIax"
                key={index}
              >
                {value.title}
              </div>
            );
          })}
        </div>
      );
    }
    return row;
  }

  render() {
    return (
      <div>
        <div className="leftNavigation__Wrapper-sc-11e7bjo-0 cXdfkr">
          <h3>Menu</h3>
          {this.makeMenu()}
          {/* <div>
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
          </div> */}
        </div>
      </div>
    );
  }
}
