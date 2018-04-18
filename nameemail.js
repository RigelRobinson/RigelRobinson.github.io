var $form = $('form#nameemail'),
    url = 'https://script.google.com/macros/s/AKfycbw1mLlAFC2FBfsjqjscs_O3DzIOUnDnuZU47vPZ9--C39ZcgHyb/exec'

$('form#nameemail').on('click', '#nameemail-submit', function(e) {
    e.preventDefault();
    $('.nameemail-ackbox').hide();

    var fields = $('form#nameemail input').serializeArray();
    var dataobj = {};
    for (let f of fields) {
        if (f.value === "") {
            $('#nameemail-ackmal').show()
            return;
        }
        dataobj[f.name] = f.value;
    }

    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: dataobj
    });

    $('#nameemail-spinner').show();

    jqxhr.done(function () {
        $('#nameemail-ackgood').show();
        $('form#nameemail').hide();
    });
    jqxhr.fail(function () {
        $('#nameemail-ackbad').show();
        $('#nameemail-spinner').hide();
    });
})
