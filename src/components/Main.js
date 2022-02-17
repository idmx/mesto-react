import React from "react";
import api from '../utils/api';
import Card from "./Card";

export default function Main( props ) {
  const [ userName, setUserName ] = React.useState()
  const [ userDescription, setUserDescription ] = React.useState()
  const [ userAvatar, setUserAvatar ] = React.useState()
  const [ cards, setCards ] = React.useState([])

  React.useEffect( () => {
    api.getData()
    .then( ( [ userInform, cards ] ) => {
      setUserName( userInform.name )
      setUserDescription( userInform.about )
      setUserAvatar( userInform.avatar )
      setCards( cards )
    })
    .catch(err => {
      console.log(`Ошибка загрузки данных: ${err}`)
    })
  })
  
  return(
    <main className="content">
      <section className="profile">   
        <div className="profile__info">
          <button
            className="profile__avatar"
            type="button"
            onClick={ props.onEditAvatar }
            style={{ backgroundImage: `url(${ userAvatar })` }} 
          >
            <div className="profile__edit-avatar"></div>
          </button>
          <h1 className="profile__name">{ userName }</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={ props.onEditProfile } />
          <p className="profile__about">{ userDescription }</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={ props.onAddPlace }
        />
      </section>
      <section className="elements">
        {
          cards.map( card => {
            return (
              <Card
                card={ card }
                onCardClick={ props.onCardClick }
              />
            );
          })
        }
      </section>
    </main>
  );
}