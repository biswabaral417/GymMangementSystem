const modalWrapper = document.getElementById("modal_wrapper");

const openModal = ({ toggleAddTodo, from, setFrom }) => {
  modalWrapper.classList.remove('hidden');
  modalWrapper.classList.add('visible');
  setFrom(from)
  toggleAddTodo();

  modalWrapper.onclick = () => {
    closeModal({ toggleAddTodo })
  };
};

const closeModal = ({ toggleAddTodo }) => {
  modalWrapper.classList.remove('visible');
  modalWrapper.classList.add('hidden');
  toggleAddTodo();
}
export default openModal;
export { closeModal }
