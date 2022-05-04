import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Página principal</p>
      <p>
        <Link to="/dinamico">Navegar a la página dinámica</Link><br/>
        <Link to="/post">Navegar a la página de carga externa</Link>
      </p>
    </Layout>
  );
};

export default Home;