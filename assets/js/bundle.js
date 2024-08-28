import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

window.copyToClipboard = function(value) {
    const el = document.createElement('textarea');
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

window.copyInnerHTMLToClipboard = function(element) {
    copyToClipboard(element.innerHTML.trim());
}