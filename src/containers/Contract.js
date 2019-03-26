import React, { Component } from 'react';

export default class Contract extends Component {
  render() {
    return (
      <div className="pages__Content-sc-1sxqz4u-1 dVKpwM">
        <h1 className="label" tabindex="0">
          Contract
        </h1>
        <div className="code__Wrapper-k9e9h3-0 hWQzFJ">
          <div className="code__Title-k9e9h3-1 gMMQQA">
            Create New Web3 Object
          </div>
          <div className="code__Type-k9e9h3-2 gyBjzW">Func</div>
          <div className="code__Method-k9e9h3-3 ksmAft">
            const web3Object = new Web3(window.web3.currentProvider);
          </div>
          <div className="code__Permission-k9e9h3-4 idnNek">Permission : -</div>
        </div>
        <div className="code__Wrapper-k9e9h3-0 hWQzFJ">
          <div className="code__Title-k9e9h3-1 gMMQQA">
            Create New Contract Object
          </div>
          <div className="code__Type-k9e9h3-2 gyBjzW">Func</div>
          <div className="code__Method-k9e9h3-3 ksmAft">
            const Contract = new web3Object.eth.Contract(<span>*abi</span>,{' '}
            <span>*contractAddress</span>);
          </div>
          <div className="code__Permission-k9e9h3-4 idnNek">Permission : -</div>
        </div>
      </div>
    );
  }
}
