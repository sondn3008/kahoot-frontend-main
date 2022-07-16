// import { Fragment } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../src/layouts/DefaultLayout/index';
import { publicRoutes } from '../src/routes/index';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
              {publicRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = DefaultLayout;

                  // if (route.layout) {
                  //     Layout = route.layout;
                  // } else if (route.layout === null) {
                  //     Layout = Fragment;
                  // }

                  return (
                      <Route
                          key={index}
                          path={route.path}
                          element={
                              <Layout>
                                  <Page />
                              </Layout>
                          }
                      />
                  );
              })}
          </Routes>
      </div>
  </Router>
  );
}

export default App;
