import hideDD from "./hideDD"

const autoHideNav = () => {
    window.onscroll = () => {
        if (document.getElementById('navUl').classList.contains('visible')) {
            hideDD()
        }
    }
    document.addEventListener('click', (event) => {
        if (!document.getElementById('navUl').contains(event.target)&&!document.getElementById('NavDropDownBtn').contains(event.target)) {
            if (document.getElementById('navUl').classList.contains('visible')) {
                hideDD()
            }
        }
    });
}

export default autoHideNav