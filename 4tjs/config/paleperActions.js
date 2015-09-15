(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;
    _4TellBoost.call4TellRest = function (operation, query) {
        operation = "upload/singleClick";
        query = query.replace(/&(columns|fillMode|numResults|blockIDs|cartIDs|format|clickStreamIDs|customerID|callback)=[\w+(-|,)?]*/g, "");
        query = query.replace("productIDs", "productID");
        var jsonUrl = _4TellBoost.Service.address + operation + encodeURI(query);
        // Call the service, passing the results to the callback function
        (function () {
            var forTell = document.createElement('script'); forTell.type = 'text/javascript'; forTell.async = true;
            forTell.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + jsonUrl;
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(forTell, s);
        })();
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
