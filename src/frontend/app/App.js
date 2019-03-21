import React  from 'react';
import Header from './components/UI/Header/Header';
import Grid from './containers/Grid/Grid';
import Layout from './hoc/Layout/Layout';
import Footer from "./components/UI/Footer/Footer";

const App = () => {

    return (
      <Layout>
        <Header />
        <Grid />
        <Footer/>
      </Layout>
  );
}

export default App;