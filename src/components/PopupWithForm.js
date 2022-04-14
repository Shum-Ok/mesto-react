function PopupWithForm({title, name, children, isOpen, onClose}) {
    return (
      <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : "popop"}`}>
        <div className="popup__window">
          <button onClick={onClose} type="button" className="popup__close-button"></button>
          <h3 className="popup__title">{title}</h3>
          <form name={`${name}-form`} className="popup__form">
            {children}
          </form>
        </div>
      </div>
    );
  }
  
  export default PopupWithForm;
  