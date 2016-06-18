var tabNames = ["About", "Technical", "Experience", "Projects", "Education", "External"];
var activeTab = "About";

function openTab(id) {
  var tabContent = document.getElementsByClassName("tab-content");
  var tabs = document.getElementsByClassName("tab");
  var hrs = document.getElementsByTagName("hr");
  var activeHrs = document.getElementsByClassName("h" + id);

  // Default everything to inactive state
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  for (i = 0; i < hrs.length; i++) {
    hrs[i].style.display = "none";
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
    tabs[i].className = tabs[i].className.replace(" one-third column", " twelve columns");
  }

  // Activate clicked element
  activeTab = id;
  for (i = 0; i < activeHrs.length; i++) {
    activeHrs[i].style.display = "block";
  }
  document.getElementById(id).style.display = "block";
  document.getElementById(id + "Tab").className += " one-third column active";
}

document.addEventListener("keydown", tabMovement, false);

function tabMovement(e) {
  var keyCode = e.keyCode;
    switch(keyCode) {
      case 38:
      console.log('up')
        var tabIndex = tabNames.indexOf(activeTab);
        if (tabIndex > 0) {
          activeTab = tabNames[tabIndex - 1];
          openTab(activeTab);
        }
        break;
      case 40:
        console.log('down')
        var tabIndex = tabNames.indexOf(activeTab);
        if (tabIndex < tabNames.length - 1) {
          activeTab = tabNames[tabIndex + 1];
          openTab(activeTab);
        }
        break;
    }
}
