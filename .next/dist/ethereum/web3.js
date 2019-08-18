'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var provider = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and MetaMask is running.
  provider = window.web3.currentProvider;
} else {
  // We are on the server *OR* he user is nor running MetaMask
  provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/a8bc12d19ee2426eba8ab41aedce8f10');
}

var web3 = new _web2.default(provider);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJwcm92aWRlciIsIndpbmRvdyIsIndlYjMiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxnQkFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUN2RTtBQUNBO2FBQVcsT0FBTyxBQUFQLEtBQVksQUFBdkIsQUFDRDtBQUhELE9BR08sQUFDTDtBQUNBO2FBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNULEFBRFMsQUFBWCxBQUdEOzs7QUFFRCxJQUFNLE9BQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBYixBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWxleGFuZHIvRGVza3RvcC93b3JrL2tpY2tzdGFydCJ9