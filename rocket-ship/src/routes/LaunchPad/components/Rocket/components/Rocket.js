import React, { useState, Component } from "react";
import RocketCore from "./RocketCore";

export const FunctionalRocket = React.memo(function () {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  shouldComponentUpdate(previous, next) {
    return false;
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
