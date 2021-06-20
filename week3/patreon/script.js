//  dropdown menus
document.addEventListener('DOMContentLoaded', function() {
    var down = document.querySelectorAll('.dropdown-trigger');
    var options = {
    
        hover : true,
        constrainWidth : false,
        coverTrigger : false,
    }
    var instances = M.Dropdown.init(down , options);
    });