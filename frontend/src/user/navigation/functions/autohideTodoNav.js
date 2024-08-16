import viewHideTodolinks from './viewHideTodoLinks'
const autoHideTodoNav = (todoNav) => {
    window.onscroll = () => {
        if (todoNav.classList.contains("visible")) {
            viewHideTodolinks();
            
        }
    }
    document.addEventListener('click', (event) => {
        if (!todoNav.contains(event.target) && !document.getElementById('todoLi').contains(event.target)) {
            if (todoNav.classList.contains("visible")) {
                viewHideTodolinks();
            }
        }
    });

}

export default autoHideTodoNav

