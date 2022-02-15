export default function Main() {
  return(
    <main className="content">
      <section className="profile">   
        <div className="profile__info">
          <button className="profile__avatar" type="button">
            <div className="profile__edit-avatar"></div>
          </button>
          <h1 className="profile__name"></h1>
          <button className="profile__edit-button" type="button"></button>
          <p className="profile__about"></p>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}