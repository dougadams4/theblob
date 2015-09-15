(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.Violight.com",
            alias: "Violife",
            GA_UA: "UA-3378686-1",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='view details'",
            spacerImage: "/v/vspfiles/templates/violight/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/violight/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "customers also bought",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#reviews_tab_content",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                wrapper: "<div id='PD14T'></div>",
                rawJS: {
                    //preInit: function (tout) {
                    //    if ($(tout.divSelect).length > 1) { tout.divSelect = "#altviews"; }
                    //}
                },
                inCart: false
            }, {
                enable: false,
                resultType: 3,
                numItems: 12,
                caption: "customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: "#ProductDetail_ProductDetails_div2",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                rawJS: {
                    preInit: function () {
                        $('.colors_lines_light').remove();
                    }
                },
                wrapper: "<table width='100%' style='border-top: 2px solid #CCC;'><tr><td></td></tr></table>",
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "you may also like",
                productStyle: "product4T product4TVC",
                divSelect: "table#v65-cart-checkout-parent td:first",
                divPosition: "replace",
                carousel: {
                    items: 2,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                wrapper: "<td valign='top' ><table><tr><td class='toutWrapper4T'></td></tr></table></td>",
                rawJS: {
                    preDisplay: function () {
                        $("table:has(span.PageText_L532n):last").remove();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
