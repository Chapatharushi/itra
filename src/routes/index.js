/** @format */
import React from "react";
import { Route } from "react-router-dom";
import Analytics from "../pages/Analytics/index";


const Routes = () => {
  return (
    <>
      <Route path="/analytics" exact component={Analytics} />
    </>
  );
};

export default Routes;
