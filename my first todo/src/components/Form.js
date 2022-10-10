import React from 'react';

//Обработчик ввода текста
const Form = ({ setInputText, todos, setTodos , inputText}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value); // присваиваем текст из инпута
  };

  //Отмена перезагрузки страницы при отправке, создаем новое состояние а также рандомный id
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos,{text: inputText, complited: false, id: Math.random() * 1000}]);
    setInputText('');// пустой инпут
  };

  return (
    <form>
      <input 
        value={ inputText } //присваиваем пустой инпут после ввода новой задачи
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="create a task"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
