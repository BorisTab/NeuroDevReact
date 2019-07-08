import React, {Component} from 'react';
import Card from 'components/Card';

export default class RecommendationsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendations: [],
    };
  }

  componentDidMount() {
    const serverIp = '127.0.0.1:8000';
    const myId = 1;

    fetch(`http://${serverIp}/recommendation/new/${myId}`, {mode: 'cors'})
        .then((response) => response.json())
        .then((response) => {
          this.setState({
            recommendations: response.message.recommendations,
          });
        })
        .catch((error) => console.log(error));
  }

  render() {
    const base64 = 'data:image/png;base64,';
    return (
      <div className="cards">
        {this.state.recommendations.map((recommendation) => <Card
          key={this.state.recommendations.indexOf(recommendation)}
          text={recommendation.text}
          picture={base64 + recommendation.picture}
        />)}
      </div>
    );
  }
}
