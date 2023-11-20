function showTab(tabId, buttonId) {
  var tabs = document.getElementsByClassName("tabContent");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";
  var buttons = document.getElementsByClassName("tabButton");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#052936";
  }
  document.getElementById(buttonId).style.backgroundColor = "#141f37";
}
showTab("tab1", "btnTab1");
