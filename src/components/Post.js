import React, { Component } from 'react';
import axios from 'axios';
import { Badge } from 'reactstrap';

import Layout from './Layout';


class Post extends Component {

  state = { post: null }
  
  componentDidMount() {
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text')
      .then(response => this.setState({ post: response.data }));
  }
  
  render() {
    return (
      <Layout>
        { this.state.post && <div className="position-relative">
        
          <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
            Probando Bootstap 
            <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>Además!</Badge>
          </span>
          
          <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Texto cargado desde api de prueba</span>
          
          <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>{this.state.post}</article>
          
        </div> }
      </Layout>
    );
  }
  
}

export default Post;