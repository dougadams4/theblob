(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.vortexdefense.com",
            alias: "vortexde",
            GA_UA: "UA-23812003-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/VTX Hipster/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/VTX Hipster/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/VTX Hipster/images/nophoto.gif",
            pricePrefix: "Price: ",
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
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".colors_pricebox",
                divPosition: "below",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Our customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#v65-product-parent + table",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
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
                divSelect: "#v65-cart-checkout-parent td:first",
                divPosition: "replace",
                carousel: {
                    items: 2,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<td valign='top'><div class='PD14T'></div></td>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
