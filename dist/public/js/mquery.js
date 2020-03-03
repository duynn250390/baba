$(document).ready(function() {});
$(document).on('click', '.show_box_search', function() {

});

function tabs_CONTROL_TICKED() {
    $(document).on('click', '.item_tabs_ticked', function() {
        $('.item_tabs_ticked').removeClass('active');
        $(this).addClass('active');
        get_ID = $(this).attr('data-tabs');
        $('.item_list_a').removeClass('activetabs');
        $('#tabsa' + get_ID).addClass('activetabs');
    });
}

function tabs_CONTROL_NOW($value) {
    $(document).on('click', '.' + $value, function() {
        $('.' + $value).removeClass('active');
        $(this).addClass('active');
        get_ID = $(this).attr('data-tabs');
        var DATAID = $('#tabs_' + get_ID).attr('data-id');
        var NAMECLASS = $('#' + DATAID + get_ID).attr('class');
        var FINTCLASS = $('#' + DATAID + get_ID).hasClass(NAMECLASS);

        $('.' + NAMECLASS).hide(300);
        $('#' + DATAID + get_ID).show(300);
    });
}