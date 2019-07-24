//code for Tabs - https://codepen.io/anon/pen/mJyQez 
$(document).ready(function() {

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
    });