import React from 'react';
import Proptypes from 'prop-types';

function Card({ cardName, cardDescription, cardAttr1,
  cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, onDeleteButtonClick }) {
  return (
    <div>
      <h2 data-testid="name-card">{cardName}</h2>
      <img data-testid="image-card" src={ cardImage } alt={ cardName } />
      <p data-testid="description-card">{cardDescription}</p>
      <p data-testid="attr1-card">{cardAttr1}</p>
      <p data-testid="attr2-card">{cardAttr2}</p>
      <p data-testid="attr3-card">{cardAttr3}</p>
      <p data-testid="rare-card">{cardRare}</p>
      {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      <button data-testid="delete-button" onClick={ onDeleteButtonClick }>Excluir</button>
    </div>
  );
}

Card.propTypes = {
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
export default Card;
