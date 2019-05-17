import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeList from "./containers/HomeList"
import NotFound from "./containers/NotFound"

const BaseRouter = () => (
    <div>
      <Switch>
      <Route exact path="/" component={HomeList} />{" "}
          
      <Route component={NotFound} />{" "}
      </Switch>
    </div>
  );
  
  export default BaseRouter;