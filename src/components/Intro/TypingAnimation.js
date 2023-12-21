import React, { Component } from 'react';

class TypingAnimation extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
    };
  }

  componentDidMount() {
    this.generateRandomColors();
  }

  generateRandomColors() {
    const words = this.props.text.split(' ');
    const colors = words.map(() => this.getRandomColor());
    this.setState({ colors });
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleAnimationIteration = () => {
    // Generate new random colors on each animation iteration
    this.generateRandomColors();
  };

  render() {
    const { text } = this.props;
    const { colors } = this.state;

    const words = text.split(' ');

    const wordSpans = words.map((word, index) => (
      <span key={index} style={{ color: colors[index] }}>
        {word}
      </span>
    ));

    return (
      <span onAnimationIteration={this.handleAnimationIteration}>
        {wordSpans}
      </span>
    );
  }
}

export default TypingAnimation;
