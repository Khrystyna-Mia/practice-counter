import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Container from './Container';
import CounterView from 'views/CounterView';
// import TodosView from 'views/TodosView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/counter">😎 Counter</Link>
      </li>

      <li>
        <Link to="/todos">😎 Todos</Link>
      </li>
    </ul>

    <Container>
      <Routes>
        <Route path="/counter" element={<CounterView />} />
      </Routes>

      {/* <Routes>
        <Route path="/todos" element={<TodosView />} />
      </Routes> */}
    </Container>
  </>
);

export default App;
