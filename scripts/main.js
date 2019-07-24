//code for Tabs - https://codepen.io/anon/pen/mJyQez 
/*$(document).ready(function() {

    $('.main-wrapper .tabs li').on('mouseover', function() {

        var $panel = $(this).closest('.main-wrapper');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });*/

function callModalRegister(){
    var userName = document.getElementById("navUserNameID");
    var password = document.getElementById("navPasswordID");

    var output = {};
    output.username = userName.value;
    output.password = password.value;

    console.log(output);
    //backend function call (output)
}


/*php func login (js obj)

obj.un
obj.pw

get sql find(un)
if valid return 
else return report incorrect details (turn on report div)


*/