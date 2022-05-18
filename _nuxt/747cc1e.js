(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{272:function(e,t,o){"use strict";o.r(t);var n={components:{Layout:o(176).a}},r=o(14),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Layout",{attrs:{title:"approveMax ERC20 POS ",description:"approveMax method can be used to approve max amount on the root token.",keywords:"pos client, erc20, approveMax, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/content/docs/pos/erc20/approve-max.md"}},[o("h1",{attrs:{id:"approvemax"}},[e._v("approveMax")]),e._v(" "),o("p",[o("code",[e._v("approveMax")]),e._v(" method can be used to approve max amount on the root token.")]),e._v(" "),o("pre",[o("code",[e._v("const erc20RootToken = posClient.erc20(<root token address>, true);\n\nconst approveResult = await erc20RootToken.approveMax();\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n")])]),e._v(" "),o("h2",{attrs:{id:"spenderaddress"}},[e._v("spenderAddress")]),e._v(" "),o("p",[e._v("The address on which approval is given is called "),o("code",[e._v("spenderAddress")]),e._v(". It is a third-party user or a smart contract which can transfer your token on your behalf.")]),e._v(" "),o("p",[e._v("By default spenderAddress value is erc20 predicate address.")]),e._v(" "),o("p",[e._v("You can specify spender address value manually.")]),e._v(" "),o("pre",[o("code",[e._v("const erc20RootToken = posClient.erc20(<root token address>,true);\n\n// approve 100 amount\nconst approveResult = await erc20Token.approveMax({\n    spenderAddress: <spender address value>\n});\n\nconst txHash = await approveResult.getTransactionHash();\n\nconst txReceipt = await approveResult.getReceipt();\n")])])])}),[],!1,null,null,null);t.default=component.exports}}]);