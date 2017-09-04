var results = {
    name: 'kevin',
    age: 30,
    shouldShowAge: true,
    sex: 'male'
};
var source = $("#preview-template").html();
var template = Handlebars.compile(source);

$('.live-preview-input').change(updatePreview);

function updatePreview() {
    $('.live-preview-input').each(function () {
        var $input = $(this);
        var isCheckBox = $input.is(':checkbox');
        var isRadio = $input.is(':radio');
        var target = $input.data('target');
        var val;

        if (isCheckBox) {
            val = $input.is(':checked');
        } else if (isRadio) {
            var radioName = $input.prop('name');
            val = $('[name=' + radioName + ']:checked').val();
        } else if ($input.is('[type=number]')) {
            val = parseInt($input.val(), 10);
        } else {
            val = $input.val();
        }

        results[target] = val;
    });
    $('#preview').html(template(results));
}

Handlebars.registerHelper('lebowski', function (sex) {
    return sex == 'male' ? 'dude' :
        sex == 'female' ? 'dudette' : '';
});