import Layout from './components/Layout/Layout';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';


function App() {

  return (
    <>
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
    </>
  )
}

export default App;
