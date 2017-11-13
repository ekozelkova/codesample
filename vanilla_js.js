/**
 * Returns the "id" parameter from the current url
 */
function getRuleId() {
    var id = location.search.split('id=')[1];
    return id === undefined ? '' : id;
}

function saveRule() {
    var data = {
        id: getRuleId(),
        name: $.trim($("#header-input").val()),
        description: $.trim($("#description").val()),
        statusIds: [],
        action: 'save'
    };

    $('#in-collapse-list input:checked').each(function() {
        data.statusesId.push($(this).val());
    });
    var params = {
        JSONstring: JSON.stringify(data)
    };
    
    $.post('http://develop.mryou.artexe.com/services/endpoint_alert.php', params, function(response) {
        //check for empty required fields
        if (response.errid != null) {
            $('#danger-box').fadeIn().css('display', 'inline-block');
            setTimeout(function () {
                $('#danger-box').fadeOut('slow');
            }, 1800)
        }
        else {
            $('#success-box').fadeIn().css('display', 'inline-block');
            setTimeout(function () {
                location.href = 'rules_list.php';
            }, 1500);
        }
    });

}