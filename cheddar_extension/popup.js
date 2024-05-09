const body = document.querySelector("body");
const button = document.getElementById("send-btn");

const getUrl = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    body.insertAdjacentHTML("beforeend", activeTab.url);
  });
}

button.addEventListener("click", () => {
  getUrl();
});
