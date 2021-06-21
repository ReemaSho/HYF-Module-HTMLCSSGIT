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

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });

function closeBtn () {
        document.getElementById('mobile-demo').style.display='none';
    }