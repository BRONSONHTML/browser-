// get the tab links and tab content elements
var tabLinks = document.querySelectorAll('.tabs ul li a');
var tabContent = document.querySelectorAll('.tab-pane');

// loop through each tab link and add an event listener
tabLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // remove active class from all tab links
    tabLinks.forEach(function(link) {
      link.parentNode.classList.remove('active');
    });
    
    // add active class to clicked tab link
    this.parentNode.classList.add('active');
    
    // hide all tab content
    tabContent.forEach(function(content) {
      content.classList.remove('active');
    });
    
    // show the content for the clicked tab
    var id = this.getAttribute('href').substring(1);
    document.getElementById(id).classList.add('active');
  });
});

// add event listener to add tab button
var addTabBtn = document.getElementById('add-tab');
addTabBtn.addEventListener('click', function() {
  // create a new tab link and tab content element
  var newTabLink = document.createElement('li');
  newTabLink.innerHTML = '<a href="#tab3">Tab 
