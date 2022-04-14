// import components
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImageCardPopupOpen, setIsImageCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleCardClick(card) {
    setSelectedCard({name: card.name, link: card.link})
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleImageCardClick() {
    setIsImageCardPopupOpen(true)
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsImageCardPopupOpen(false)
    setSelectedCard({name: '', link: ''})
  }
  
  return (
    <>
      <Header />
      <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onImagePopup={handleImageCardClick} />
      <Footer />
      <PopupWithForm buttonText='Сохранить' title='Редактировать профиль' name='edit' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input id="name" type="text" name="name" placeholder="Имя" className="popup__input popup__input_string_name" required />
        <span id="name-error" className="popup__error"></span>
        <input id="profession" type="text" name="about" placeholder="Работа" className="popup__input popup__input_string_jop" required />
        <span id="profession-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm buttonText='Отправить' title='Новое место' name='card' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input id="card-name" type="text" name="name" placeholder="Название места" className="popup__input popup__input_card_name" required />
        <span id="card-name-error" className="popup__error"></span>
        <input id="cardUrl" type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_card_url" required />
        <span id="cardUrl-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm buttonText='Отправить' title='Обновить аватар' name='edit-avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input id="avatar" type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_avatar_url" required />
        <span id="avatar-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm buttonText='Да' title='Вы уверены?' name='delete' />

      <ImagePopup card={selectedCard} isOpen={isImageCardPopupOpen} onClose={closeAllPopups} />

      <article className="element">
        <button className="element__delete"></button>
        <img src="." alt="нет картинки" className="element__photo" />
        <div className="element__text">
          <h2 className="element__title">Название</h2>
          <div>
            <button type="button" className="element__heart"></button><br />
            <span className="element__heart-count"></span>
          </div>
        </div>
      </article>
    </>
  );
}

export default App;