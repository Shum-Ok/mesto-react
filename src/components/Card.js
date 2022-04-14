function Card({card, onImagePopup, onCardClick}) {
  function handleClick() {
    onImagePopup()
    onCardClick({name: card.name, link: card.link})
  }

  return (
    <article className="element">
      <button className="element__delete"></button>
      <img src={card.link} alt={card.name} className="element__photo" onClick={handleClick}/>
      <div className="element__text">
        <h2 className="element__title">{card.name}</h2>
        <div>
          <button type="button" className="element__heart"></button><br />
          <span className="element__heart-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
  
  export default Card;