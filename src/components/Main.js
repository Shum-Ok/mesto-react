//import images
import React from 'react';
import api from '../../src/utils/Api'
import editImg from '../images/icon-edit.svg';
import addImg from '../images/icon-add.svg';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onImagePopup, onCardClick}) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUser()
      .then(res => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch(err => console.log(err))
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then(res => {
        const data = res.map(item => {
          return {
            name: item.name,
            link: item.link,
            idCard: item._id,
            likes: item.likes
          }
        })
        setCards(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__avatar-img">
          <img src={userAvatar} alt="Фото профеля" className="profile__avatar" />
          <button onClick={onEditAvatar} title="Загрузить аватар" className="profile__avatar-button"></button>
        </div>
        <h1 className="profile__user-name">{userName}</h1>
        <p className="profile__user-jop">{userDescription}</p>
        <button onClick={onEditProfile} type="button" className="edit-profile profile__edit-profile">
          <img src={editImg} alt="Редактировать профиль" className="edit-profile__icon" />
        </button>
        <button onClick={onAddPlace} type="button" className="add-button profile__add-button">
          <img src={addImg} alt="Добавить" className="add-button__icon" />
        </button>
      </section>

      <section className="elements content__elements">
        {
          cards.map(item => (
            <Card card={item} key={item.idCard} onImagePopup={onImagePopup} onCardClick={onCardClick} />
          ))
        }
      </section>
    </main>
  );
}

export default Main;