import '../index.css';
import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState( false );
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState( false );
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState( false );
  const [ selectedCard, setSelectedCard ] = React.useState([]);
  const [ isSelectedCard, setIsSelectedCard ] = React.useState( false );
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen( true );
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen( true );
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen( true );
  }

  function handleCardClick( card ) {
    setIsSelectedCard( true );
    setSelectedCard( card );
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen( false );
    setIsEditAvatarPopupOpen( false );
    setIsAddPlacePopupOpen( false );
    setIsSelectedCard( false );
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={ handleEditProfileClick }
        onAddPlace={ handleAddPlaceClick }
        onEditAvatar={ handleEditAvatarClick }
        onCardClick={ handleCardClick }
      />
      <Footer />
      <PopupWithForm 
        name="edit"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={ isEditProfilePopupOpen }
        onClose={ closeAllPopups }
      >
        <input type="text" id="name-input" className="popup__form-element" name="name-profile" 
        placeholder="Ваше имя" required minlength="2" maxlength="40" />
        <span className="popup__error name-input-error"></span>
        <input type="text" id="about-input" className="popup__form-element" name="about-profile" 
        placeholder="О себе" required minlength="2" maxlength="200" />
        <span className="popup__error popup__error_visible about-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        button="Создать"
        isOpen={ isAddPlacePopupOpen }
        onClose={ closeAllPopups }
      >
        <input type="text" id="title-input" className="popup__form-element" name="title-element" 
        placeholder="Название" required minlength="2" maxlength="30" />
        <span className="popup__error popup__error_visible title-input-error"></span>
        <input type="url" id="link-input" className="popup__form-element" name="link-element" 
        placeholder="Ссылка на картинку" required />
        <span className="popup__error popup__error_visible link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={ isEditAvatarPopupOpen }
        onClose={ closeAllPopups }
      >
        <input type="url" id="avatar-link" className="popup__form-element" name="link-avatar" 
        placeholder="Ссылка на картинку" required />
        <span className="popup__error popup__error_visible avatar-link-error"></span>
      </PopupWithForm>
      <ImagePopup
        card={ selectedCard }
        isOpen={ isSelectedCard }
        onClose={ closeAllPopups }
      >
      </ImagePopup>
    </div>
  );
}

export default App;
