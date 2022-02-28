export default function Card( props ) {
  function handleClick() {
    props.onCardClick( props.card );
  }

  function handleLikeClick() {
    props.onCardLike( props.card );
  }

  function handleDeleteCard() {
    props.onCardDelete( props.card );
  }

  return (
    <div className="element" >
      <img
        className="element__image"
        src={ props.card.link } 
        alt={ props.card.name }
        onClick={ handleClick }
      />
      <button
        className={ `element__trash ${ props.isOwn ? 'element__trach_active' : '' }` }
        type="button"
        onClick={ handleDeleteCard }
      />
      <div className="element__description">
        <h2
          className="element__title"
          title={ props.card.name }
        >
          { props.card.name }
        </h2>
        <div className="element__likes">
          <button
            className={ `element__like ${ props.isLiked ? 'element__like_active' : '' }` }
            type="button"
            onClick={ handleLikeClick }
          />
          <p className="element__counts">{ props.card.likes.length }</p>
        </div>
      </div>
    </div>
  );
}