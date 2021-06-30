(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e){e.exports=JSON.parse('{"contractName":"SimpleStorage","abi":[{"constant":false,"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.5.16+commit.9c3226ce\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"get\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"x\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"methods\\":{}},\\"userdoc\\":{\\"methods\\":{}}},\\"settings\\":{\\"compilationTarget\\":{\\"/Users/yosrahelal/Documents/Alyra/v2-exos-correction/Dapp et Truffle /simple-storage-react-1/contracts/SimpleStorage.sol\\":\\"SimpleStorage\\"},\\"evmVersion\\":\\"istanbul\\",\\"libraries\\":{},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"/Users/yosrahelal/Documents/Alyra/v2-exos-correction/Dapp et Truffle /simple-storage-react-1/contracts/SimpleStorage.sol\\":{\\"keccak256\\":\\"0x512df1603c5f878921707d236bc53d974afe05b4d9de4b6094249bac5ab60efe\\",\\"urls\\":[\\"bzz-raw://0d6de97971b1c387f984fa7ea1d9ec10f8a63d68cc63bf8bd00d8c3a7c9e3ee1\\",\\"dweb:/ipfs/Qmbt92T34sHzedfJjDsvbisvLhRtghNwS6VW8tqrGkrqTD\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b5060c68061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea265627a7a72315820a566a2061b0ebade3de2d3e1f0aa12011931f3ef35c89f8331266a28ac7fed1864736f6c63430005100032","deployedBytecode":"0x6080604052348015600f57600080fd5b506004361060325760003560e01c806360fe47b11460375780636d4ce63c146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea265627a7a72315820a566a2061b0ebade3de2d3e1f0aa12011931f3ef35c89f8331266a28ac7fed1864736f6c63430005100032","sourceMap":"66:176:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:176:1;;;;;;;","deployedSourceMap":"66:176:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;66:176:1;;;;;;;;;;;;;;;;;;;;;;;;113:53;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;113:53:1;;;;;;;;;;;;;;;;;:::i;:::-;;170:70;;;:::i;:::-;;;;;;;;;;;;;;;;;;;113:53;160:1;147:10;:14;;;;113:53;:::o;170:70::-;206:4;225:10;;218:17;;170:70;:::o","source":"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.21 <0.7.0;\\n\\ncontract SimpleStorage {\\n  uint storedData;\\n\\n  function set(uint x) public {\\n    storedData = x;\\n  }\\n\\n  function get() public view returns (uint) {\\n    return storedData;\\n  }\\n}\\n","sourcePath":"/Users/yosrahelal/Documents/Alyra/v2-exos-correction/Dapp et Truffle /simple-storage-react-1/contracts/SimpleStorage.sol","ast":{"absolutePath":"/Users/yosrahelal/Documents/Alyra/v2-exos-correction/Dapp et Truffle /simple-storage-react-1/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[59]},"id":60,"nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity",">=","0.4",".21","<","0.7",".0"],"nodeType":"PragmaDirective","src":"32:32:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":59,"linearizedBaseContracts":[59],"name":"SimpleStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"name":"storedData","nodeType":"VariableDeclaration","scope":59,"src":"93:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"93:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"body":{"id":49,"nodeType":"Block","src":"141:25:1","statements":[{"expression":{"argumentTypes":null,"id":47,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":45,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"147:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":46,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"160:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"147:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":48,"nodeType":"ExpressionStatement","src":"147:14:1"}]},"documentation":null,"id":50,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"name":"x","nodeType":"VariableDeclaration","scope":50,"src":"126:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"126:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"125:8:1"},"returnParameters":{"id":44,"nodeType":"ParameterList","parameters":[],"src":"141:0:1"},"scope":59,"src":"113:53:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":57,"nodeType":"Block","src":"212:28:1","statements":[{"expression":{"argumentTypes":null,"id":55,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":54,"id":56,"nodeType":"Return","src":"218:17:1"}]},"documentation":null,"id":58,"implemented":true,"kind":"function","modifiers":[],"name":"get","nodeType":"FunctionDefinition","parameters":{"id":51,"nodeType":"ParameterList","parameters":[],"src":"182:2:1"},"returnParameters":{"id":54,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"name":"","nodeType":"VariableDeclaration","scope":58,"src":"206:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"206:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"205:6:1"},"scope":59,"src":"170:70:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":60,"src":"66:176:1"}],"src":"32:211:1"},"legacyAST":{"absolutePath":"/Users/yosrahelal/Documents/Alyra/v2-exos-correction/Dapp et Truffle /simple-storage-react-1/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[59]},"id":60,"nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity",">=","0.4",".21","<","0.7",".0"],"nodeType":"PragmaDirective","src":"32:32:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":59,"linearizedBaseContracts":[59],"name":"SimpleStorage","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":40,"name":"storedData","nodeType":"VariableDeclaration","scope":59,"src":"93:15:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":39,"name":"uint","nodeType":"ElementaryTypeName","src":"93:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"body":{"id":49,"nodeType":"Block","src":"141:25:1","statements":[{"expression":{"argumentTypes":null,"id":47,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":45,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"147:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":46,"name":"x","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"160:1:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"147:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":48,"nodeType":"ExpressionStatement","src":"147:14:1"}]},"documentation":null,"id":50,"implemented":true,"kind":"function","modifiers":[],"name":"set","nodeType":"FunctionDefinition","parameters":{"id":43,"nodeType":"ParameterList","parameters":[{"constant":false,"id":42,"name":"x","nodeType":"VariableDeclaration","scope":50,"src":"126:6:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":41,"name":"uint","nodeType":"ElementaryTypeName","src":"126:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"125:8:1"},"returnParameters":{"id":44,"nodeType":"ParameterList","parameters":[],"src":"141:0:1"},"scope":59,"src":"113:53:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":57,"nodeType":"Block","src":"212:28:1","statements":[{"expression":{"argumentTypes":null,"id":55,"name":"storedData","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"225:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":54,"id":56,"nodeType":"Return","src":"218:17:1"}]},"documentation":null,"id":58,"implemented":true,"kind":"function","modifiers":[],"name":"get","nodeType":"FunctionDefinition","parameters":{"id":51,"nodeType":"ParameterList","parameters":[],"src":"182:2:1"},"returnParameters":{"id":54,"nodeType":"ParameterList","parameters":[{"constant":false,"id":53,"name":"","nodeType":"VariableDeclaration","scope":58,"src":"206:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":52,"name":"uint","nodeType":"ElementaryTypeName","src":"206:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"205:6:1"},"scope":59,"src":"170:70:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":60,"src":"66:176:1"}],"src":"32:211:1"},"compiler":{"name":"solc","version":"0.5.16+commit.9c3226ce.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0x87fb730572099a325233D8A95729ad9578d92643","transactionHash":"0x1f51f4900547c9aaa8239872d22b0eb07bb8c547713684b388dd2c418c57b24d"}},"schemaVersion":"3.3.2","updatedAt":"2020-11-16T13:49:24.661Z","networkType":"ethereum","devdoc":{"methods":{}},"userdoc":{"methods":{}}}')},190:function(e,t,n){e.exports=n(473)},195:function(e,t,n){},208:function(e,t){},217:function(e,t){},235:function(e,t){},237:function(e,t){},254:function(e,t){},255:function(e,t){},316:function(e,t){},318:function(e,t){},347:function(e,t){},348:function(e,t){},394:function(e,t){},409:function(e,t){},472:function(e,t,n){},473:function(e,t,n){"use strict";n.r(t);var a=n(17),i=n.n(a),r=n(184),s=n.n(r),o=(n(195),n(20)),c=n.n(o),l=n(48),u=n(5),d=n(6),p=n(11),m=n(9),y=n(12),f=n(104),b=n(76),g=n.n(b),T=function(){return new Promise((function(e,t){window.addEventListener("load",Object(l.a)(c.a.mark((function n(){var a,i,r,s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=13;break}return a=new g.a(window.ethereum),n.prev=2,n.next=5,window.ethereum.enable();case 5:e(a),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),t(n.t0);case 11:n.next=14;break;case 13:window.web3?(i=window.web3,console.log("Injected web3 detected."),e(i)):(r=new g.a.providers.HttpProvider("http://127.0.0.1:8545"),s=new g.a(r),console.log("No web3 instance injected, using Local web3."),e(s));case 14:case"end":return n.stop()}}),n,null,[[2,8]])}))))}))},v=(n(472),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={storageValue:0,web3:null,accounts:null,contract:null},n.componentDidMount=Object(l.a)(c.a.mark((function e(){var t,a,i,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return a=e.sent,e.next=9,t.eth.net.getId();case 9:i=e.sent,r=f.networks[i],s=new t.eth.Contract(f.abi,r&&r.address),n.setState({web3:t,accounts:a,contract:s},n.runExample),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),n.runExample=Object(l.a)(c.a.mark((function e(){var t,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,t.accounts,a=t.contract,e.next=3,a.methods.get().call();case 3:i=e.sent,n.setState({storageValue:i});case 5:case"end":return e.stop()}}),e)}))),n.set=Object(l.a)(c.a.mark((function e(){var t,a,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.accounts,i=t.contract,r=n.storage.value,e.next=4,i.methods.set(r).send({from:a[0]});case 4:n.runExample(),n.storage.value=0;case 6:case"end":return e.stop()}}),e)}))),n}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.state.web3?i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Good to Go!"),i.a.createElement("p",null,"Your Truffle Box is installed and ready."),i.a.createElement("h2",null,"Smart Contract Example"),i.a.createElement("p",null,"If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default)."),i.a.createElement("p",null,"Try changing the value stored on ",i.a.createElement("strong",null,"line 40")," of App.js."),i.a.createElement("div",null,"The stored value is: ",this.state.storageValue),i.a.createElement("div",null,"Set a new stored value:",i.a.createElement("div",{className:"form-group mr-sm-2"},i.a.createElement("input",{id:"storage",type:"number",ref:function(t){e.storage=t},className:"form-control",required:!0})),i.a.createElement("button",{onClick:this.set,className:"btn btn-primary"},"Set"))):i.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[190,1,2]]]);
//# sourceMappingURL=main.12f19691.chunk.js.map