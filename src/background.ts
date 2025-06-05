chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    func: () => {
      const myButton: HTMLButtonElement = document.createElement("button");
      myButton.textContent = "Say Hi to Martin";
      myButton.onclick = () => {
        alert("Hey Martin");
      }
      
      document.body.appendChild(myButton);
    },
    target: {
      tabId: tab.id || 0
    }
  }).then(() => {
    console.log("button inserted!");
  }).catch((err) => {
    console.error("Error inserting button:", err);
  })
})