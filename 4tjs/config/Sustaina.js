(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.sustainablesupply.com",
            alias: "Sustaina",
            GA_UA: "UA-9322974-2",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/SustainableSupply/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/SustainableSupply/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/SustainableSupply/images/nophoto.gif",
            //hideIfNoImage: true,
            priceClass: "price2",
            pricePrefix: "",
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
                showPrice: true,
                resultType: 0,
                numItems: 12,
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".colors_pricebox",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                rawJS: {
                    preDisplay: function () {
                        $("td:has(img#product_photo):last").css("max-width", "300px");
                    }
                },
                inCart: false
            },
                {
                    enable: true,
                    showPrice: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Our customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 150,
                    showRatings: false,
                    wrapper: "<table width='100%' class='PD24T'><tr><td></td></tr></table>",
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
                showPrice: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                orientation: "horizontal",
                divSelect: "#v65-cart-checkout-parent",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<table width='100%' class='VC4T'><tr><td></td></tr></table>",
                rawJS: {
                    preInit: function (tout) {
                        var foo = $("#v65-cart-checkout-parent td:first");
                        foo.append($("form[name=google_checkout], div#BongoCheckout-AboveButton").css({ "width": "auto", "margin": "10px 0", "float": "left", "padding": 0 }));
                        $("form[name=google_checkout]").css("margin-left", 10);
                    },
                    preDisplay: function () {
                        $("table:has(table.v65-productDisplay):last").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
