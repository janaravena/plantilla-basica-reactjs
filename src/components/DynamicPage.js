import React from 'react';

import Layout from './Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <header as="h2">Página Dinámica</header>
      <p>Esta página se carga asincrónicamente</p>
    </Layout>
  );
};

export default DynamicPage;