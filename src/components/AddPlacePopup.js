import React from "react";
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup ( props ) {
  const [ title, setTitle ] = React.useState('');
  const [ link , setLink  ] = React.useState('');

  function onAddCard( evt ) {
    evt.preventDefault();
    closePopup();
    props.onAddPlace({
      name: title,
      link
    });
    resetAddForm();
  }

  function closePopup() {
    props.onClose();
    resetAddForm();
  }

  function resetAddForm() {
    setTitle( '' );
    setLink( '' );
  }

  return(
    <PopupWithForm
      name="add"
      title="Новое место"
      button="Создать"
      isOpen={ props.isOpen }
      onClose={ closePopup }
      onSubmit={ onAddCard }
    >
      <input type="text" id="title-input" className="popup__form-element" name="title-element"
      value={ title } onChange={ e => setTitle( e.target.value )} placeholder="Название" required minLength="2" maxLength="30" />
      <span className="popup__error popup__error_visible title-input-error"></span>
      <input type="url" id="link-input" className="popup__form-element" name="link-element"
      value={ link } onChange={ e => setLink( e.target.value )} placeholder="Ссылка на картинку" required />
      <span className="popup__error popup__error_visible link-input-error"></span>
    </PopupWithForm>
  )
}