const hideDD = () => {
    document.getElementById('NavDropDownBtn').classList.remove('md-none')
    document.getElementById('NavDropDownBtn').classList.add('md-block')
    document.getElementById('navUl').classList.remove('visible')
    document.getElementById('navUl').classList.add('hidden')
}
export default hideDD