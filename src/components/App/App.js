import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import { datas } from '../../datas/config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {},
      input: {}
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  /**
   *
   * @param {Number} length 입력할 파라미터 길이
   * @param {Function} event 버튼 클릭 함수
   * @param {Event} e button Event 객체
   */
  clickHandler(length, event, e) {
    const name = e.target.name;

    const inputNames = document.getElementsByName(name);
    for (let i = 0; i < inputNames.length; i++) {
      if (inputNames[i].tagName === 'INPUT') {
        inputNames[i].value = '';
      }
    }
    this.setState({
      input: {
        ...this.state.input,
        [name]: ''
      }
    });

    if (length) {
      if (
        !this.state.input[name] ||
        Object.keys(this.state.input[name]).length !== length
      ) {
        alert('입력항목을 모두 채워주세요');
        return;
      }
    }

    if (event) {
      this.setState({
        result: {
          ...this.state.result,
          [name]: {
            status: 'Loading',
            length: 0
          }
        }
      });

      event(this.state.input[name])
        .then(result => {
          this.setState({
            result: {
              ...this.state.result,
              [name]: {
                status: 'Success',
                data: result,
                length: result.length
              }
            }
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            result: {
              ...this.state.result,
              [name]: {
                status: 'Error',
                length: 0
              }
            }
          });
        });
    } else {
      alert('Send 타입 alert입니다.');
    }
  }

  // Contents 구조 생성
  makeContents() {
    let row = [];
    for (let label in datas) {
      row.push(
        <div
          className="pages__Content-sc-1sxqz4u-1 dVKpwM"
          key={label}
          id={label}
        >
          <h1 className="label" tabIndex="0">
            {label}
          </h1>
          {datas[label].map((value, index) => {
            return (
              // type에 맞는 class지정
              <div key={index} id={value.title}>
                <div className="code__Title-k9e9h3-1 gMMQQA">{value.title}</div>
                <div
                  className={
                    'code__Type-k9e9h3-2 ' +
                    (value.type === 'call' ? 'cmMCQp' : 'gyBjzW')
                  }
                >
                  {value.type}
                </div>

                {/* object 형식과 function 형식 분류  */}
                {value.method === 'object' ? (
                  <div className="code__Method-k9e9h3-3 ksmAft">
                    {value.descriptions.map((description, descIndex) => {
                      return description.highlight ? (
                        <span key={descIndex}>{description.words}</span>
                      ) : (
                        description.words
                      );
                    })}
                  </div>
                ) : (
                  <div className="code__Method-k9e9h3-3 ksmAft">
                    Contract.methods.{value.method}(
                    {value.parameters.map((paramValue, paramIndex) => {
                      return (
                        <span key={paramIndex}>
                          *{paramValue.field}
                          {paramIndex === value.parameters.length - 1
                            ? null
                            : ', '}
                        </span>
                      );
                    })}
                    ).{value.type}(&#123; from : <span>*accountAddress</span>{' '}
                    &#125;)
                  </div>
                )}

                {/* permission 출력 */}
                <div className="code__Permission-k9e9h3-4 idnNek">
                  Permission : {value.permission}
                </div>

                {/* parameters 출력 */}
                {value.parameters.length > 0
                  ? this.makeTable(value.parameters, 'Parameter')
                  : null}

                {/* responses 출력 */}
                {value.responses.length > 0
                  ? this.makeTable(value.responses, 'Response')
                  : null}

                {/* input text 출력 */}
                {value.parameters.length > 0
                  ? this.makeInput(value.parameters, value.title)
                  : null}

                {/* button event binding */}
                {label === 'Contract' ? null : (
                  <div className="code__Example-k9e9h3-5 iJAXNg">
                    <button
                      type="button"
                      name={value.title}
                      onClick={this.clickHandler.bind(
                        this,
                        value.parameters.length,
                        value.event
                      )}
                    >
                      Click for test
                    </button>
                    <p>Result :</p>
                    {/* 결과 출력 */}
                    {this.state.result[value.title] !== undefined ? (
                      <div className="code__ExampleLine-k9e9h3-6 cClStL">
                        {this.state.result[value.title].length
                          ? this.state.result[value.title].data.map(
                            (values, index) => {
                              let data = ['{'];
                              for (let key in values) {
                                data.push(
                                  <div key={key + index} className="result">
                                    {key} : <span>{values[key]}</span>
                                  </div>
                                );
                              }
                              data.push('}');
                              return data;
                            }
                          )
                          : this.state.result[value.title].status !== 'Success'
                            ? this.state.result[value.title].status
                            : this.state.result[value.title].data}
                      </div>
                    ) : (
                      ' '
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      );
    }
    return row;
  }

  /**
   *
   * @param {Object} datas table 데이터
   * @param {String} title 함수 title
   */
  makeInput(datas, title) {
    console.log(datas);
    return (
      <div className="code__Test-k9e9h3-8 hzfKcW">
        <h4>Input parameter for test</h4>
        {datas.map((value, index) => {
          return (
            <div className="inputDiv" key={index}>
              <label>{value.field}</label>
              <input
                name={title}
                id={value.field}
                onChange={this.inputChangeHandler}
                type="text"
              />
            </div>
          );
        })}
      </div>
    );
  }

  // input change 이벤트
  inputChangeHandler(e) {
    const { name, id, value } = e.target;

    this.setState({
      input: {
        ...this.state.input,
        [name]: {
          ...this.state.input[name],
          [id]: value
        }
      }
    });
  }

  /**
   *
   * @param {*} datas table 데이터
   * @param {*} tableTitle 함수 title
   */
  makeTable(datas, tableTitle) {
    return (
      <div className="code__Param-k9e9h3-7 cgLjMM">
        <h4>{tableTitle}</h4>
        <table>
          <thead>
            <tr>
              <th width="15%">Field</th>
              <th width="15%">Type</th>
              <th width="70%">Description</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((tableValue, tableIndex) => {
              return (
                <tr key={tableIndex}>
                  <td>{tableValue.field}</td>
                  <td>{tableValue.type}</td>
                  <td>{tableValue.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="className=pages__Wrapper-sc-1sxqz4u-0 cRufqc">
        <Sidebar />
        <div>
          {/* page header */}
          <h1>Smart Contract guide</h1>
          <p>- Account address is the default parameters for all calls.</p>
          <p>- All return values are promise object</p>
          <p>
            - The call function is a simple read function, and no gas is
            consumed and results are returned immediately.
          </p>
          <p>
            - The send function is a write function, which uses gas to run and
            takes time to write to the block.
          </p>
        </div>

        {this.makeContents()}
      </div>
    );
  }
}

export default App;
