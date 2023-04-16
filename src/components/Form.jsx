import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attr1, setAttr1] = useState(0);
  const [attr2, setAttr2] = useState(0);
  const [attr3, setAttr3] = useState(0);
  const [image, setImage] = useState('');
  const [rare, setRare] = useState('normal');
  const [trunfo, setTrunfo] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setName('');
    setDescription('');
    setAttr1(0);
    setAttr2(0);
    setAttr3(0);
    setImage('');
    setRare('normal');
    setTrunfo(false);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name-input">Nome:</label>
      <input
        id="name-input"
        type="text"
        data-testid="name-input"
        required
        value={ name }
        onChange={ (event) => setName(event.target.value) }
      />

      <label htmlFor="description-input">Descrição:</label>
      <textarea
        id="description-input"
        data-testid="description-input"
        required
        value={ description }
        onChange={ (event) => setDescription(event.target.value) }
      />

      <label htmlFor="attr1-input">Atributo 1:</label>
      <input
        id="attr1-input"
        type="number"
        data-testid="attr1-input"
        required
        value={ attr1 }
        onChange={ (event) => setAttr1(Number(event.target.value)) }
      />

      <label htmlFor="attr2-input">Atributo 2:</label>
      <input
        id="attr2-input"
        type="number"
        data-testid="attr2-input"
        required
        value={ attr2 }
        onChange={ (event) => setAttr2(Number(event.target.value)) }
      />

      <label htmlFor="attr3-input">Atributo 3:</label>
      <input
        id="attr3-input"
        type="number"
        data-testid="attr3-input"
        required
        value={ attr3 }
        onChange={ (event) => setAttr3(Number(event.target.value)) }
      />

      <label htmlFor="image-input">Imagem:</label>
      <input
        id="image-input"
        type="text"
        data-testid="image-input"
        required
        value={ image }
        onChange={ (event) => setImage(event.target.value) }
      />

      <label htmlFor="rare-input">
        <select
          id="rare-input"
          data-testid="rare-input"
          required
          value={ rare }
          onChange={ (event) => setRare(event.target.value) }
        >
          Raridade:
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>

      <label htmlFor="trunfo-input">Trunfo:</label>
      <input
        id="trunfo-input"
        type="checkbox"
        data-testid="trunfo-input"
        checked={ trunfo }
        onChange={ (event) => setTrunfo(event.target.checked) }
      />

      <button type="submit" data-testid="save-button">Salvar</button>
    </form>
  );
}
export default Form;
