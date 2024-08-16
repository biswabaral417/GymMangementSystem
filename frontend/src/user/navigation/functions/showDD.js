const showDD = (e) => {
    e.target.closest("button").classList.remove('md-block')
    e.target.closest("button").classList.add('md-none')
    document.getElementById('navUl').classList.remove('hidden')
    document.getElementById('navUl').classList.add('visible')
}

export default showDD