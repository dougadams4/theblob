(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.semedicalsupply.com",
            alias: "semedica",
            GA_UA: "UA-18282292-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/143/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/143/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/143/images/nophoto.gif",
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
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "table.colors_pricebox",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<table class='PD14T' cellspacing='0' cellpadding='0'><tr><td></td></tr></table>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 3,
                caption: "Customers also viewed...",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TPD2",
                divSelect: "#v65-product-related",
                divPosition: "replace",
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<table class='PD14T' cellspacing='0' cellpadding='0'><tr><td></td></tr></table>",
                rawJS: { preDisplay: function (tout) { $(".colors_lines_light").hide(); $(tout.divSelect).prevAll("img, br").hide(); } },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "table#v65-cart-checkout-parent td:first",
                divPosition: "replace",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<td><div class='PD14T'></div></td>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
