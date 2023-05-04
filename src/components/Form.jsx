import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name-input">Nome:</label>
        <input
          type="text"
          name="cardName"
          data-testid="name-input"
          required
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="description-input">Descrição:</label>
        <textarea
          name="cardDescription"
          data-testid="description-input"
          required
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <label htmlFor="attr1-input">Atributo 1:</label>
        <input
          type="number"
          name="cardAttr1"
          data-testid="attr1-input"
          required
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <label htmlFor="attr2-input">Atributo 2:</label>
        <input
          type="number"
          name="cardAttr2"
          data-testid="attr2-input"
          required
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <label htmlFor="attr3-input">Atributo 3:</label>
        <input
          id="attr3-input"
          type="number"
          name="cardAttr3"
          data-testid="attr3-input"
          required
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <label htmlFor="image-input">Imagem:</label>
        <input
          name="cardImage"
          data-testid="image-input"
          required
          value={ cardImage }
          onChange={ onInputChange }
        />

        <label htmlFor="rare-input">
          <select
            name="cardRare"
            data-testid="rare-input"
            required
            value={ cardRare }
            onChange={ onInputChange }
          >
            Raridade:
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {!hasTrunfo && (
          <div>
            <label htmlFor="trunfo-input">Trunfo:</label>
            <input
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </div>
        )}

        {hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p>}

        <button
          id="save-btn"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: Proptypes.string,
  cardDescription: Proptypes.string,
  cardAttr1: Proptypes.string,
  cardAttr2: Proptypes.string,
  cardAttr3: Proptypes.string,
  cardImage: Proptypes.string,
  cardRare: Proptypes.string,
  cardTrunfo: Proptypes.bool,
  isSaveButtonDisabled: Proptypes.bool,
  onInputChange: Proptypes.func,
  onSaveButtonClick: Proptypes.func,
}.isRequired;

export default Form;
