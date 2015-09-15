(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    var emailRec = location.search.match(/(?:4Tee=)([\w+,?]+)[&\?]?/)
    if (emailRec && emailRec.length) {
        var params = emailRec[1].split(/[,_]/);
        //Volusion does not like hyphens in URLs, so emailType-resultType
        //gets sent with an underscore instead.
        params[0] = params[0].replace("_", "-");
        //Sometimes the productID has dashes in it, which causes Volusion to freak out,
        //so we have to scrape the productID off the page.
        var id = params[2] || $("input[name=ProductCode]").val();
        if (params[0] <= 21) {
            _gaq.push(['_setAccount', _4TellBoost.SiteInfo.GA_UA],
                ['_trackEvent', "4TellRecsEmail", "Email-" + params[0] + "-" + params[1], id]);
        } else {
            _gaq.push(['_setAccount', _4TellBoost.SiteInfo.GA_UA],
                ['_trackEvent', "4TellRecs", "ShopperApprovedCert-" + _4TellBoost.resultTypes[params[1]], id]);
        }
    }

}(window._4TellBoost = window._4TellBoost || {}, jQuery));
