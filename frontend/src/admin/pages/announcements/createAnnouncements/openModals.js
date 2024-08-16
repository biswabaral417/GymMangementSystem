
const modalWrapper = document.getElementById("modal_wrapper");

const openModal = ({ toggleAddAnnouncements  }) => {
    modalWrapper.classList.remove('hidden');
    modalWrapper.classList.add('visible');
    toggleAddAnnouncements(true);

    modalWrapper.onclick = () => {
        closeModal({ toggleAddAnnouncements })
    };
};
const closeModal = ({ toggleAddAnnouncements }) => {
    modalWrapper.classList.remove('visible');
    modalWrapper.classList.add('hidden');
    toggleAddAnnouncements(false);
}
export { openModal, closeModal }