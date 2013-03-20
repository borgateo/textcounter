;(function ($){
    $.fn.textcounter = function(options) {
        var that = $(this);
        var settings = {
            sentence: "tekens beschikbaar",
            limit: 256
        };
            
        options && $.extend(settings, options);
        
        function setCount() {
            var chars     = that.value.length;
            var container = $(that).closest("div");

            if ( chars > settings.limit ) {
                that.value = that.value.substr(0, settings.limit);
                chars = settings.limit;
            }
            var amount = settings.limit - chars;

            if ( container.find(".charleft").length <= 0 ) {
                $('<div class="charleft"><span class="amount">'+ amount +'</span> '+ settings.sentence + '</div>')
                    .insertAfter(that);
            } else {
                container.find(".charleft span.amount").html(amount);
            }
        }

        $(this).on("keyup focus", function() {
            setCount();
        });
        setCount();

    return this;
  };
})(jQuery);
