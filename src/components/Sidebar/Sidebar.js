import React, { Component } from 'react';
import './Sidebar.css';
import { datas } from '../../datas/data';

export default class Sidebar extends Component {
  componentDidMount() {
    let menu = document.getElementsByClassName(
      'leftNavigation__Wrapper-sc-11e7bjo-0'
    )[0];

    function toggleClass() {
      let activeSubClass = document.getElementsByClassName('jSbGOb')[0];
      let activeMainClass = document.getElementsByClassName('SDYKW')[0];

      if (activeMainClass) {
        activeMainClass.classList.remove('SDYKW');
        activeMainClass.classList.add('hgGTJo');
      }

      if (activeSubClass) {
        activeSubClass.classList.remove('jSbGOb');
        activeSubClass.classList.add('kdhIax');
      }
    }

    menu.addEventListener('click', function(e) {
      let target = e.target;
      if (target && target.nodeName === 'DIV') {
        let scroll = document.getElementById(target.innerHTML);
        if (scroll) {
          scroll.scrollIntoView({
            behavior: 'smooth'
          });
        }

        if (
          !target.classList.contains('SDYKW') &&
          target.classList.contains('leftNavigation__LabelSelect-sc-11e7bjo-1')
        ) {
          // 서브메뉴 삭제
          let child = document.getElementsByClassName(
            'leftNavigation__SubMenu-sc-11e7bjo-2'
          );
          let length = child.length;
          if (child) {
            for (let i = 0; i < length; i++) {
              child[0].parentNode.removeChild(child[0]);
            }
          }

          toggleClass();
          target.classList.add('SDYKW');

          // 동적으로 서브 메뉴 추가 이벤트
          datas[target.innerHTML].forEach(value => {
            let subDiv = document.createElement('div');
            subDiv.classList.add(
              'leftNavigation__SubMenu-sc-11e7bjo-2',
              'kdhIax'
            );
            subDiv.innerHTML = value.title;
            target.parentNode.appendChild(subDiv);
          });
        } else if (
          !target.classList.contains('jSbGOb') &&
          target.classList.contains('leftNavigation__SubMenu-sc-11e7bjo-2')
        ) {
          toggleClass();

          if (target.classList.contains('kdhIax')) {
            target.classList.remove('kdhIax');
          }
          target.classList.add('jSbGOb');
        }
      }
    });
  }

  makeMenu() {
    let row = [];
    for (let data in datas) {
      row.push(
        <div key={data}>
          <div className="leftNavigation__LabelSelect-sc-11e7bjo-1 hgGTJo">
            {data}
          </div>
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
        </div>
      </div>
    );
  }
}
