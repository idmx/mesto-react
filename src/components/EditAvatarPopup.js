import React from "react";
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup( props ) {
  const inputRef = React.useRef();

  function onUpdateAvatar( evt ) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value
    });
    closePopup();
  }

  function closePopup() {
    props.onClose();
    resetAvatarForm();
  }

  function resetAvatarForm() {
    inputRef.current.value = '';
  }

  return(
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      button="Сохранить"
      isOpen={ props.isOpen }
      onClose={ closePopup }
      onSubmit={ onUpdateAvatar }
    >
      <input type="url" id="avatar-link" className="popup__form-element" name="link-avatar"
      placeholder="Ссылка на картинку" ref={ inputRef } required />
      <span className="popup__error popup__error_visible avatar-link-error"></span>
    </PopupWithForm>
  )
}