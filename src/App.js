import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  handlesValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const validInputs = cardName && cardDescription && cardImage;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const validSum = 210;
    const maxPoints = 90;
    const validAttr = sum <= validSum
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && cardAttr1 <= maxPoints
      && cardAttr2 <= maxPoints
      && cardAttr3 <= maxPoints;

    this.setState({ isSaveButtonDisabled: !(validInputs && validAttr) });
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.handlesValidation);
  };

  onSaveButtonClick = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          { ...this.state }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
