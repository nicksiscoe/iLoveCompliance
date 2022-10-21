const pulseBackground = () => {
  document.body.style.background = 'blue';
  setTimeout(() => {
    document.body.style.background = '';
    setTimeout(() => {
      document.body.style.background = 'blue';
      setTimeout(() => {
        document.body.style.background = '';
        setTimeout(() => {
          document.body.style.background = 'blue';
          setTimeout(() => {
            document.body.style.background = '';
          }, 250);
        }, 250);
      }, 250);
    }, 250);
  }, 250);
}

try {
  const url = window.location.href;
  if (url.includes('github.com/payitgov') && url.includes('pull')) {
    pulseBackground();
  }
} catch (error) {
  alert(`FAILURE: ${error}`);
}
