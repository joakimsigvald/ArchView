dashboard = function () {
    function panelFactory(architecture) {
        var panelContainer = $('#panelWrapper');
        panelContainer.empty();
    }
    function getArchitecture() {
        var serviceUrl = '/api/architecture';

        $.ajax({
            url: serviceUrl,
            type: "GET",
            dataType: 'json',
            success: function (architecture, status, xhr) {
                panelFactory(architecture);
                $('#updatedTime').html(moment().locale('sv').format('dddd D MMMM YYYY HH:mm:ss'));
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseText);
            }
        });
    }

    return {
        init: function () {
            getArchitecture();

            window.setInterval(function () {
                getArchitecture();
            }, 300000);
        }
    };
};
$(dashboard().init);