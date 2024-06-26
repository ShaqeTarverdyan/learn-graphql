import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import Users from './components/Users';
import Layout from './components/Layout';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="create-user" element={<UserForm />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}
