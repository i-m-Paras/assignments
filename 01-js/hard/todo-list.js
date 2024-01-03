/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.result = [];
  }

  add(todo) {
    this.result.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.result.length) {
      this.result.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.result.length) {
      this.result[index] = updatedTodo;
    }
  }

  getAll() {
    return this.result;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.result.length) {
      return this.result[indexOfTodo];
    } else {
      return null;
    }
  }
  clear() {
    this.result = [];
  }
}

module.exports = Todo;
