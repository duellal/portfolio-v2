const getElemHeightById = (elemId) => {
    const navbarElem = document.getElementById(elemId)
    return navbarElem.offsetHeight
}

const getElemWidthById = (elemId) => {
    const navbarElem = document.getElementById(elemId)
    return navbarElem.offsetWidth
}

function scrollToElem(section) {
    let elem = document.getElementById(section)
    elem.scrollIntoView()
}


export {
    getElemHeightById,
    getElemWidthById,
    scrollToElem
}