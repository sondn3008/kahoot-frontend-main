// import { Fragment } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from '../src/layouts/DefaultLayout/index';
import { publicRoutes } from '../src/routes/index';
import { isJwtExpired } from 'jwt-check-expiration';
import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//           <Routes>
//               {publicRoutes.map((route, index) => {
//                   const Page = route.component;
//                   let Layout = DefaultLayout;

//                   // if (route.layout) {
//                   //     Layout = route.layout;
//                   // } else if (route.layout === null) {
//                   //     Layout = Fragment;
//                   // }

//                   return (
//                       <Route
//                           key={index}
//                           path={route.path}
//                           element={
//                               <Layout>
//                                   <Page />
//                               </Layout>
//                           }
//                       />
//                   );
//               })}
//           </Routes>
//       </div>
//   </Router>
//   );
// }

function App() {
    return (
      <Router>
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;

                if(route.path === "/teacher" || route.path === "/list-room" || route.path === "/create-question" || route.path === "/watch-room"){
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <RequireAuth>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </RequireAuth>
                            }
                        />
                    );
                }else{
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
                }
            })}
        </Routes>
    </Router>
    );
  }

function RequireAuth({ children }) {
    if (!localStorage.kahootApp_accessToken || isJwtExpired(localStorage.kahootApp_accessToken) === true) {
      return <Navigate to="/login" />;
    }
    return children;
  }

export default App;
