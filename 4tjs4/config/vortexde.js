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
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                numItems: 12,
                divSelect: ".colors_pricebox",
                divPosition: "below",
                wrapper: "<table style='table-layout: fixed;width: 100%;'><tr><td><div class='PD14T'></div></td></tr></table>",
                carousel: {
                     items: 3,
                     itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 1], [992, 2], [1200, 3]],
                     scrollPerPage: true,
                     navigation: true,
                     navigationText: false,
                     pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                caption: "Our customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#v65-product-parent + table",
                divPosition: "below",
                numItems: 12,
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [480, 2], [769, 3], [992, 4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table:last").css("table-layout", "fixed");
                        $(".colors_lines_light").hide();
                    }
                },
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
                divPosition: "above",
                wrapper: "<td><div class='VC4T'></div></td>",
                carousel: {
                    items: 3,
                    itemsCustom: [[0, 1], [481, 2], [692, 3], [768, 2], [990, 2], [1081, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 150,
                showRatings: true,
                responsive: {
                    1 : {
                        divSelect: "table#v65-cart-checkout-parent td:first",
                        divPosition: "above",
                	wrapper: "<td><div class='VC4T'></div></td>"
                     },
                    2 : {
                        divSelect: "table#v65-cart-checkout-parent td:first",
                        divPosition: "above",
                	wrapper: "<td><div class='VC4T'></div></td>"
                     },
                    3 : {
                        divSelect: "table#v65-cart-checkout-parent td:first",
                        divPosition: "above",
                	wrapper: "<td><div class='VC4T'></div></td>"
                     },
                    4 : {
                        divSelect: "table#v65-cart-checkout-parent tr:first",
                        divPosition: "below",
                	wrapper: "<tr><td><div class='VC4T'></div></td></tr>"
                     },
                    5 : {
                        divSelect: "table#v65-cart-checkout-parent tr:first",
                        divPosition: "below",
                	wrapper: "<tr><td><div class='VC4T'></div></td></tr>"
                     },
                     6 : {
                        divSelect: "table#v65-cart-checkout-parent tr:first",
                        divPosition: "below",
                	wrapper: "<tr><td><div class='VC4T'></div></td></tr>"
                     }
                },
                rawJS: {
                    preInit: function (tout) {
                        $("img[name='placeholder']:first").remove();
                        $("table#v65-cart-checkout-parent").css("table-layout", "fixed");
                        $("table#v65-cart-checkout-parent td:first").remove();
                        $("table#v65-cart-checkout-parent td:first").attr("valign", "top");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost, window._4TellBoost.jq || jQuery));
