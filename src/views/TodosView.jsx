import React, { Component } from 'react';
import Container from '../components/Container';
import TodoList from '../components/Todos/TodoList';
import TodoEditor from '../components/Todos/TodoEditor';
import TodoFilter from '../components/Todos/TodoFilter';
import Modal from '../components/Todos/Modal';
import Stats from 'components/Todos/Stats';
import { GoDiffAdded } from 'react-icons/go';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <div style={barStyles}>
          <TodoFilter />
          <Stats />
          <button
            type="button"
            onClick={this.toggleModal}
            aria-label="add todo"
          >
            <GoDiffAdded size={30} color="ff0000" />
          </button>
        </div>

        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default TodosView;
