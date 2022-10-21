const checkAll = () => {
  let value = document.getElementsByName("pull_request[body]")[0].value;
  value = value.replace(/\[ ]/g, "[x]");
  document.getElementsByName("pull_request[body]")[0].value = value;
  document.querySelector(".form-actions").children[1].click();
}

const createCheckAllButton = () => {
  let button = document.createElement('button');
  button.innerHTML = "I Love Compliance";
  button.onclick = () => {
    checkAll();
  }
  return button;
}

try {
  const url = window.location.href;
  if (url.includes('github.com/payitgov') && url.includes('pull')) {
    const isDraft = document.getElementsByClassName("State")[0].innerHTML.includes("Draft");
    if (!isDraft) {
      const actionsWrapper = document.querySelector('.timeline-comment-actions');
      const checkAllButton = createCheckAllButton();
      actionsWrapper.appendChild(checkAllButton);
    }
  }
} catch (error) {
  alert(`FAILURE LOVING COMPLIANCE: ${error}`);
}
