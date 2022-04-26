import React from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const name = React.useRef(null)
  const link = React.useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    onAddPlace({
      name: name.current.value,
      link: link.current.value,
    })
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Отправить'
      title='Новое место'
      name='card'
    >
      <input
        ref={name}
        id="card-name" type="text" name="name" placeholder="Название места" className="popup__input popup__input_card_name" required />
      <span id="card-name-error" className="popup__error"></span>
      <input
        ref={link}
        id="cardUrl" type="url" name="link" placeholder="Ссылка на картинку" className="popup__input popup__input_card_url" required />
      <span id="cardUrl-error" className="popup__error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup