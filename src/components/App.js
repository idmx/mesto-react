import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <template id = "element">
        <div className="element">
          <img className="element__image" src="<%=require('./images/zenit.jpg')%>" alt="Зенит арена" />
          <button className="element__trash" type="button"></button>
          <div className="element__description">
            <h2 className="element__title" title="Зенит арена">Зенит арена</h2>
            <div className="element__likes">
              <button className="element__like" type="button"></button>
              <p className="element__counts">0</p>
            </div>
          </div>
        </div>
      </template>
      <div className="popup popup_edit">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="edit-profile" novalidate>
            <input type="text" id="name-input" className="popup__form-element" name="name-profile" 
            value="Слава Завьялов" placeholder="Ваше имя" required minlength="2" maxlength="40" />
            <span className="popup__error name-input-error"></span>
            <input type="text" id="about-input" className="popup__form-element" name="about-profile" 
            value="Студент" placeholder="О себе" required minlength="2" maxlength="200" />
            <span className="popup__error popup__error_visible about-input-error"></span>
            <button type="submit" className="popup__save">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_add">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="add-element" novalidate>
            <input type="text" id="title-input" className="popup__form-element" name="title-element" 
            value="" placeholder="Название" required minlength="2" maxlength="30" />
            <span className="popup__error popup__error_visible title-input-error"></span>
            <input type="url" id="link-input" className="popup__form-element" name="link-element" 
            value="" placeholder="Ссылка на картинку" required />
            <span className="popup__error popup__error_visible link-input-error"></span>
            <button type="submit" className="popup__save">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_photo">
        <div className="popup__container-photo">
          <img className="popup__photo-element" src="#" alt="#" />
          <button className="popup__close" type="button"></button>
          <p className="popup__photo-title"></p>
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="edit-avatar" novalidate>
            <input type="url" id="avatar-link" className="popup__form-element" name="link-avatar" 
            value="" placeholder="Ссылка на картинку" required />
            <span className="popup__error popup__error_visible avatar-link-error"></span>
            <button type="submit" className="popup__save">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_delete">
        <div className="popup__container">
          <button className="popup__close" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="button" className="popup__save">Да</button>
        </div>
      </div>
    </div>
  );
}

export default App;
