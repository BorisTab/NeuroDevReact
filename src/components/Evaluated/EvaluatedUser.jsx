import React, {PureComponent} from 'react';
import './EvaluatedUser.css';

export default class EvaluatedUser extends PureComponent {
  render() {
    return (
      <div className="user_evaluated">
        <img src="https://via.placeholder.com/50/0000FF/808080%20?Text=User" alt=""/>
        <p className="name_user_evaluated">Friend Name</p>
      </div>
    );
  }
}
