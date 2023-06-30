// $(document).ready(function() {
//     $('#example').DataTable( {
//         dom: 'Bfrtip',
//         buttons: [
//             'copy', 'csv', 'excel', 'pdf', 'print'
//         ]
//     } );
// } );



// --------Home Page-----------------


// navbar fixed top
var navbar = document.getElementById("navbartop");

window.onscroll = function() {
    if (window.pageYOffset > 120) {
        navbar.classList.add("fixed-top");
        navbar.classList.remove("sticky-top");
    } else {
        navbar.classList.remove("fixed-top");
    }

};
