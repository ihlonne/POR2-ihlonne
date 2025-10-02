import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Project from './pages/Project';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/projects/:title'
            element={<Project />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
