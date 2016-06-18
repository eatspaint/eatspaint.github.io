var tabNames = ["About", "Technical", "Experience", "Projects", "Education", "External"];
var slickTabs = ["Experience", "Projects", "Education"]
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
  for (i = 0; i < slickTabs.length; i++) {
    $('.slick-initialized').slick('unslick');
  }

  // Activate clicked element
  activeTab = id;
  for (i = 0; i < activeHrs.length; i++) {
    activeHrs[i].style.display = "block";
  }
  document.getElementById(id).style.display = "block";
  document.getElementById(id + "Tab").className += " one-third column active";

  // Initialize Slick if in slickTabs
  if (slickTabs.indexOf(activeTab) != -1) {
    $('.' + activeTab + 'Slick').slick({
      accessibility: false,
      adaptiveHeight: true,
      dots: true,
    });
  }
}

document.addEventListener("keydown", tabMovement, false);

function tabMovement(e) {
  var keyCode = e.keyCode;
  switch(keyCode) {
    // up arrow
    case 38:
      var tabIndex = tabNames.indexOf(activeTab);
      if (tabIndex > 0) {
        activeTab = tabNames[tabIndex - 1];
        openTab(activeTab);
      }
      break;
    // down arrow
    case 40:
      var tabIndex = tabNames.indexOf(activeTab);
      if (tabIndex < tabNames.length - 1) {
        activeTab = tabNames[tabIndex + 1];
        openTab(activeTab);
      }
      break;
    // left
    case 37:
      if (slickTabs.indexOf(activeTab) != -1) {
        $('.' + activeTab + 'Slick').slick('slickPrev');
      }
      break;
    // right
    case 39:
      if (slickTabs.indexOf(activeTab) != -1) {
        $('.' + activeTab + 'Slick').slick('slickNext');
      }
      break;
  }
}
