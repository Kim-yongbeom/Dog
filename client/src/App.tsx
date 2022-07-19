// npm i @emotion/styled @emotion/react
// npm i react-router-dom@5.3.3
// npm i --save-dev @types/react-router-dom
// npm i react-error-boundary
// npm install react-icons --save
// npm i axios
// npm i redux react-redux redux-saga redux-devtools-extension redux-actions
// npm i @types/react-redux @types/redux-actions -D

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import styled from "@emotion/styled/macro";

import Navbar from "./components/Nav";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
// import SignIn from "./pages/SignIn";

const Base = styled.div`
  padding-top: 8rem;
`;

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Base>
            <Route exact path="/" component={Home} />
            {/* <Route path="/signin" element={<SignIn />} /> */}
            <Route component={NotFound} />
          </Base>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
