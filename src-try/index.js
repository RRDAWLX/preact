import * as preact from '../dist/preact.module.js';
import { render, createElement, Component } from '../dist/preact.module.js';
import htm from './htm.mjs';
import TodoList from './components.mjs';

const html = htm.bind(createElement);
console.log(preact);
const appDom = document.getElementById('app');
console.dir(appDom);

/* let vNode = html`
  <div id="root"}>
    <h1>preact try</h1>
    <p>test</p>
  </div>
`
debugger
render(vNode, appDom)
console.log(vNode);
debugger
vNode = html`
  <div id="id"}>
    <h1>preact try</h1>
    <p>test</p>
  </div>
`
debugger
// render(vNode, document.getElementById('app')) */

function FunctionComponent({ id }) {
	// <${TodoList} />
	return html`
		<div id=${id}>
			<h1>preact try</h1>
			<p>test</p>
		</div>
	`;
}

let vNode = html`
	<${FunctionComponent} id="functionComponent" />
`;
console.log(vNode);
render(vNode, appDom);

/* class ClassComponent extends Component {
  render ({ id }) {
    
    return html`
    <div id=${id}>
      <h1>preact try</h1>
      <p>test</p>
    </div>
  `
  }
}

let vNode = html`
  <${ClassComponent} id="classComponent" />
`
console.log(vNode)
render(vNode, appDom) */
