import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeList from "./containers/HomeList"
import NotFound from "./containers/NotFound"
import ViewSearch from "./containers/ViewSearch";

const BaseRouter = () => (
    <div>
      <Switch>
      <Route exact path="/" component={HomeList} />
      <Route path="/search/:keyword" exact component={ViewSearch} />

          
      <Route component={NotFound} />{" "}
      </Switch>
    </div>
  );
  
  export default BaseRouter;