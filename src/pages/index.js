import React from 'react';
import { Link } from 'gatsby';
import { login } from './../services/firebase/auth'


import Layout from '../components/layout';

const IndexPage = () => {
  // login()
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage;
