'use strict';

document.addEventListener('mouseup', () => {
  let selection = window.getSelection().toString();
  if (selection) {
    document.execCommand('copy');
  }
});
