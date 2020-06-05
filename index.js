const hash = window.location.hash.substr(1);

if (hash) {
  const linkInSidebar = document.querySelector(`[href^="#${hash}"]`);
  const CLASS_CHECK = 'folder';
  const REQUEST_CLASS_CHECK = 'request';
  let currentDomElement = linkInSidebar;

  do {
    if (currentDomElement.classList.contains(CLASS_CHECK)) {
      currentDomElement.classList.add('open', 'user-opened')
    }
    if (currentDomElement.nodeName === 'UL') {
      currentDomElement.classList.add('display-requests', 'user-opened')
    }
    if (currentDomElement.classList.contains(REQUEST_CLASS_CHECK)) {
      currentDomElement.style.backgroundColor = 'yellow';
    }
    currentDomElement = currentDomElement.parentElement;
  } while (currentDomElement || (currentDomElement && currentDomElement.nodeName !== 'BODY'));
}