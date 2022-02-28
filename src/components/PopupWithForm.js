export default function PopupWithForm( props ) {
  return(
    <div className={ `popup popup_${ props.name } ${ props.isOpen ? 'popup_opened' : '' }` }>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={ props.onClose }
        />
        <h2 className="popup__title">{ props.title }</h2>
        <form
          className="popup__form"
          name={ `${ props.name }-profile` }
          onSubmit={ props.onSubmit }
          noValidate
        >
          { props.children }
          <button
            type="submit"
            className="popup__save"
          >
            { props.button }
          </button>
        </form>
      </div>
    </div>
  );
}