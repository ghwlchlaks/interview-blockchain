import React, { Component } from 'react';
import './App.css';
import Sidebar from '../Sidebar/Sidebar';
import { datas } from '../../datas/data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {}
    };
  }

  clickHandler(event, e) {
    const name = e.target.name;
    if (event) {
      this.setState(
        {
          result: {
            ...this.state.result,
            [name]: {
              status: 'loading',
              length: 0
            }
          }
        },
        () => {
          console.log(this.state);
        }
      );

      const test = [
        {
          name: '울산 반도체 굴뚝1',
          location: '울산광역시 ~구',
          detail: '허용 기준치 0.234 ppm',
          factoryId: 1,
          paraN: 2
        }
      ];
      console.log(test.length);
      event()
        .then(result => {
          this.setState(
            {
              result: {
                ...this.state.result,
                [name]: {
                  status: 'Success',
                  data: result,
                  length: result.length
                }
              }
            },
            () => {
              console.log(this.state);
            }
          );
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('Send 타입 alert입니다.');
    }
  }

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

                <div className="code__Permission-k9e9h3-4 idnNek">
                  Permission : {value.permission}
                </div>
                {value.parameters.length > 0
                  ? this.makeTable(value.parameters, 'Parameter')
                  : null}

                {value.responses.length > 0
                  ? this.makeTable(value.responses, 'Response')
                  : null}

                {value.parameters.length > 0
                  ? this.makeInput(value.parameters)
                  : null}

                {label === 'Contract' ? null : (
                  <div className="code__Example-k9e9h3-5 iJAXNg">
                    <button
                      type="button"
                      name={value.title}
                      onClick={this.clickHandler.bind(this, value.event)}
                    >
                      Click for test
                    </button>
                    <p>Result :</p>
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
                          : this.state.result[value.title].status === 'loading'
                            ? 'loading'
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
  makeInput(datas) {
    return (
      <div className="code__Test-k9e9h3-8 hzfKcW">
        <h4>Input parameter for test</h4>
        {datas.map((value, index) => {
          return (
            <div className="inputDiv" key={index}>
              <label>{value.field}</label>
              <input onChange={this.inputChangeHandler} type="text" value="" />
            </div>
          );
        })}
      </div>
    );
  }

  inputChangeHandler() {}

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
