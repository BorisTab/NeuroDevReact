import React, {PureComponent} from 'react';
import './Sidebar.css';

export default class Sidebar extends PureComponent {
  render() {
    return (
      <div className="sidebar">
        <form className="sidebarForm">
          <div className="params">
            <div className="paramSlider">
              <h3>Partnership</h3>
              <input className="slider"
                type="range" min='0' max='10' value="0"/>
              <p className="value">0</p>
            </div>
            <input type="hidden" className="uidToServer"/>
          </div>
          <input type="submit" value="Send" className="submitButton"/>
        </form>
      </div>
    );
  }
}
