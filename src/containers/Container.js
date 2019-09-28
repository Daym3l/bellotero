import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Testimonial from "../views/Testimonial/view.testimonial";
import Configurator from "../views/Configurator/view.configurator";

export default function Container() {
  return (
    <div>
      <Switch>
        <Route exact path="/" name="Testimonial" component={Testimonial} />
        <Route
          exact
          path="/page-1"
          name="Testimonial"
          component={Testimonial}
        />
        <Route
          exact
          path="/page-2"
          name="Configurator"
          component={Configurator}
        />
        <Redirect from="**" to="/" />
      </Switch>
    </div>
  );
}
