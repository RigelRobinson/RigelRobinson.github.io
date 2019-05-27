function registerFormHandler(FORMNAME) {
    var $form = $('form#' + FORMNAME),
    url = 'https://script.google.com/macros/s/AKfycbw1mLlAFC2FBfsjqjscs_O3DzIOUnDnuZU47vPZ9--C39ZcgHyb/exec'

    $form.on('click', '#' + FORMNAME + '-submit', function(e) {
        e.preventDefault();
        $('.form-ackbox').hide();

        var fields = $('form#' + FORMNAME + ' input').serializeArray();
        var dataobj = {"form": FORMNAME};
        for (let f of fields) {
            if (f.value === "") {
                $('#' + FORMNAME + '-ackmal').show()
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

        $('#' + FORMNAME + '-spinner').show();

        jqxhr.done(function () {
            $('#' + FORMNAME + '-ackgood').show();
            $form.hide();
        });
        jqxhr.fail(function () {
            $('#' + FORMNAME + '-ackbad').show();
            $('#' + FORMNAME + '-spinner').hide();
        });
    })
}
