import {
  Component,
  createElement,
} from '../dist/preact.module.js'
import htm from './htm.mjs'

const html = htm.bind(createElement)
let counter = 0;

export default class TodoList extends Component {
  state = { todos: [], text: '' };

  setText = e => {
    this.setState({ text: e.target.value });
  };

  addTodo = () => {
    let { todos, text } = this.state;
    todos = todos.concat({ text, id: ++counter });
    this.setState({ todos, text: '' });
  };

  removeTodo = e => {
    let id = e.target.getAttribute('data-id');
    this.setState({ todos: this.state.todos.filter(t => t.id != id) });
  };

  render({ }, { todos, text }) {
    return html`
      <form onSubmit=${this.addTodo} action="javascript:">
        <input value=${text} onInput=${this.setText} />
        <button type="submit">Add</button>
        <ul>
          <${TodoItems} todos=${todos} removeTodo=${this.removeTodo} />
        </ul>
      </form>
    `;
  }
}

function TodoItems ({ todos, removeTodo }) {
  return todos.map(todo => html`
    <li key=${todo.id}>
      <button type="button" onClick=${removeTodo} data-id=${todo.id}>
        remove
      </button>${' '}
      ${todo.text}
    </li>
  `);
}
