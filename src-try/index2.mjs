import {
  render,
  createElement,
  Component,
} from '../dist/preact.mjs'
import htm from './htm.mjs'

const html = htm.bind(createElement)

class App extends Component {
  addTodo() {
    const todos = this.state.todos || [];
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  render({ }, { todos = [] }) {
    return html`
          <div class="app">
            <${Header} name="ToDo" />
            <ul>
              ${todos.map(todo => html`
                <li>${todo}</li>
              `)}
            </ul>
            <button onClick=${this.addTodo.bind(this)}>Add Todo</button>
            <${Footer}>footer content here<//>
          </div>
        `;
  }
}

const Header = ({ name }) => html`<header><h1>${name} List</h1></header>`

const Footer = props => html`<footer ...${props} />`

render(html`<${App} />`, document.getElementById('app'));