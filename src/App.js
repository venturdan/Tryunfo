import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    localCards: [],
    nameFilter: '',
    rareFilter: 'todas',
  };

  handleSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      localCards,
      hasTrunfo,
    } = this.state;

    const newCard = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rare: cardRare,
      trunfo: cardTrunfo,
      hasTrunfo: false,
    };

    this.setState({
      localCards: [...localCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: cardTrunfo ? true : hasTrunfo,
    });
  };

  deleteCard = (name) => {
    const { localCards, hasTrunfo } = this.state;
    const validHastrunfo = !hasTrunfo;
    const cardRemove = localCards.filter((card) => card.name !== name);
    this.setState({
      localCards: cardRemove,
      hasTrunfo: validHastrunfo,
    });
  };

  filterChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        const { cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
        } = this.state;
        const maxnum = 90;
        const maxsum = 210;
        const att = cardAttr1 >= 0
        && cardAttr1 <= maxnum
        && cardAttr2 >= 0
        && cardAttr2 <= maxnum
        && cardAttr3 >= 0
        && cardAttr3 <= maxnum;
        const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxsum;
        const isSaveButtonDisabled = !(cardName.length > 0
          && cardDescription.length > 0
          && cardImage.length > 0
          && att
          && sum);
        this.setState({
          isSaveButtonDisabled,
        });
      },
    );
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
      isSaveButtonDisabled,
      hasTrunfo,
      localCards,
      nameFilter,
      rareFilter,
    } = this.state;

    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          localCards={ localCards }
          onInputChange={ this.handleInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.handleSaveButtonClick }
          filterChange={ (event) => this.filterChange(event) }
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
        <section className="card-list">
          {localCards
            .filter((card) => card.name.includes(nameFilter)
    && (rareFilter === 'todas' || card.rare === rareFilter))
            .map((card) => (
              <div key={ card.name }>
                <Card
                  cardName={ card.name }
                  cardDescription={ card.description }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardImage={ card.image }
                  cardRare={ card.rare }
                  cardTrunfo={ card.trunfo }
                  deleteCard={ this.deleteCard }
                />
                <button
                  onClick={ () => this.deleteCard(card.name) }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ))}
        </section>
      </>
    );
  }
}

export default App;
