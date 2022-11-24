const button = document.createElement('button');
button.innerText = 'Click Me!';
button.onclick = () => {
  // reaches into server, it is async call
  System.import('./image_viewer.js').then((module) => {
    module.default();
  })
};

document.body.appendChild(button);