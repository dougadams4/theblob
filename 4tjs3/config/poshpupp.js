(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.poshpuppyboutique.com",
            alias: "poshpupp",
            GA_UA: "UA-5290210-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "input type='button' value='See details' ",
            spacerImage: "/v/vspfiles/templates/AB/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/AB/images/nophoto.gif",
            pricePrefix: "Retail Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "More ideas",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: ".featured-title ~ table",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought",
                productStyle: "product4T product4TPD1",
                divSelect: "#v65-product-related",
                divPosition: "replace",
                carousel: {
                    items: 4,
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
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".PD14T",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Related Top Sellers",
                productStyle: "product4T product4TCat",
                divSelect: "#MainForm",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function(tout) {
                        tout.enable = tout.enable && 
                        		//categories to ignore 
                        		["325"].indexOf(_4TellBoost.Service.catId) == -1; 
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like",
                productStyle: "product4T product4TVC",
                divSelect: "#v65-cart-checkout-parent td:first",
                divPosition: "append",
                carousel: {
                    items: 3,
                    itemsCustom: [[0, 1],[481, 2],[768, 2],[980,2],[1212, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                responsive: {
                    1: {
                        divSelect: "#v65-cart-checkout-parent td:first",
                        divPosition: "append",
                        wrapper: "<div class='VC4T'></div>"
                    },
                    2: {
                        divSelect: "#v65-cart-checkout-parent td:first",
                        divPosition: "append",
                        wrapper: "<div class='VC4T'></div>"
                    },
                    3: {
                        divSelect: "#v65-cart-checkout-parent td:first",
                        divPosition: "append",
                        wrapper: "<div class='VC4T'></div>"
                    },
                    4: {
                        divSelect: "#v65-cart-checkout-parent td:first",
                        divPosition: "append",
                        wrapper: "<div class='VC4T'></div>"
                    },
                    5: {
                        divSelect: "tr:has(form[name='paypal_checkout']):last",
                        divPosition: "below",
                        wrapper: "<tr><td colspan='2'><div class='VC4T'></div></td></tr>"
                    },
                    6: {
                        divSelect: "tr:has(form[name='paypal_checkout']):last",
                        divPosition: "below",
                        wrapper: "<tr><td colspan='2'><div class='VC4T'></div></td></tr>"
                    }
                },
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost, window._4TellBoost.jq || jQuery));
