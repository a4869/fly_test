
var landing = {
    host: '',
    protocol: '',
    data: {

    },
    selectors: {
        get inputSubdomain() { return '#subdomain'; },
        get popupEnter() { return '#enter'; }
    },
    init: function () {
        var that = this;
        window.landing = that;
        that.host = window.location.host;
        that.protocol = window.location.protocol;

        $(that.selectors.popupEnter).on('opened', function () {
            that.popupEnterOpened();
        });

        $(that.selectors.inputSubdomain).on('keyup', function (e) {
            if(e.which == 13) { that.goSubdomain(); }
        });
    },
    goSubdomain: function() {
        var val = $(this.selectors.inputSubdomain).val();
        if (!val) {
            alert('Укажите поддомен');
            return false;
        }
        window.location.href = '?subdomain=' + val;
    },
    popupEnterOpened: function () {
        $(this.selectors.inputSubdomain).focus();
    },
    popupOpen: function (id) {
        $('#' + id).addClass('open').trigger('opened');
    },
    popupClose: function (id) {
        $('#' + id).removeClass('open');
    }
}.init();