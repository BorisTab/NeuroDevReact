import React, {PureComponent} from 'react';
import './Evaluated.css';

import EvaluatedUser from './EvaluatedUser';

export default class Evaluated extends PureComponent {
  render() {
    return (
      <div className="evaluated">
        <EvaluatedUser/>
        <EvaluatedUser/>
        <EvaluatedUser/>
      </div>
    );
  }
}
