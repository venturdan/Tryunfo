import { useState } from 'react';
import Proptypes from 'prop-types';

function Form({
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
}) {
  const [name, setName] = useState(cardName || '');
  const [description, setDescription] = useState(cardDescription || '');
  const [attr1, setAttr1] = useState(cardAttr1 || 0);
  const [attr2, setAttr2] = useState(cardAttr2 || 0);
  const [attr3, setAttr3] = useState(cardAttr3 || 0);
  const [image, setImage] = useState(cardImage || '');
  const [rare, setRare] = useState(cardRare || 'normal');
  const [trunfo, setTrunfo] = useState(cardTrunfo || false);

  const handleInputChange = (event) => {
    const { value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    switch (name) {
    case 'name':
      setName(newValue);
      break;
    case 'description':
      setDescription(newValue);
      break;
    case 'attr1':
      setAttr1(Number(newValue));
      break;
    case 'attr2':
      setAttr2(Number(newValue));
      break;
    case 'attr3':
      setAttr3(Number(newValue));
      break;
    case 'image':
      setImage(newValue);
      break;
    case 'rare':
      setRare(newValue);
      break;
    case 'trunfo':
      setTrunfo(checked);
      break;
    default:
      break;
    }

    onInputChange({ name, value: newValue });
  };

  function handleSubmit(event) {
    event.preventDefault();
    onSaveButtonClick({ cardName,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo });
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name-input">Nome:</label>
      <input
        id="name-input"
        type="text"
        name="name"
        data-testid="name-input"
        required
        value={ cardName }
        onChange={ handleInputChange }
      />

      <label htmlFor="description-input">Descrição:</label>
      <textarea
        id="description-input"
        name="description"
        data-testid="description-input"
        required
        value={ description }
        onChange={ handleInputChange }
      />

      <label htmlFor="attr1-input">Atributo 1:</label>
      <input
        id="attr1-input"
        type="number"
        name="attr1"
        data-testid="attr1-input"
        required
        value={ attr1 }
        onChange={ handleInputChange }
      />

      <label htmlFor="attr2-input">Atributo 2:</label>
      <input
        id="attr2-input"
        type="number"
        name="attr2"
        data-testid="attr2-input"
        required
        value={ attr2 }
        onChange={ handleInputChange }
      />

      <label htmlFor="attr3-input">Atributo 3:</label>
      <input
        id="attr3-input"
        type="number"
        name="attr3"
        data-testid="attr3-input"
        required
        value={ attr3 }
        onChange={ handleInputChange }
      />

      <label htmlFor="image-input">Imagem:</label>
      <input
        id="image-input"
        type="text"
        name="image"
        data-testid="image-input"
        required
        value={ image }
        onChange={ handleInputChange }
      />

      <label htmlFor="rare-input">
        <select
          id="rare-input"
          data-testid="rare-input"
          required
          value={ rare }
          onChange={ handleInputChange }
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
            id="trunfo-input"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ trunfo }
            onChange={ handleInputChange }
          />
        </div>
      )}

      {hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho.</p>}

      <button
        type="submit"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
      >
        Salvar

      </button>

    </form>
  );
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
