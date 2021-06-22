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
    // sidenavbar

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });

// close sidenavbar
function closeBtn () {
        document.getElementById('mobile-demo').style.display='none';
    };

// slider
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.slider');
        var options ={
            indicators : false ,
            duration : 400 , 
            interval : 4000 ,
        }
        var instances = M.Slider.init(elems, options);
      });

    