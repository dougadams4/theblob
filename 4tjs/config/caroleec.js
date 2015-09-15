(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "",
            alias: "CLIENTAL",
            GA_UA: "",
            platform: "4TellBc.js",
            addCartBtnAtts: "input type='submit' alt='Add to Cart' value='Choose Options' class='Choose'",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            //Home page doesn't register.
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 15,
                caption: "Recommended for you...",
                productStyle: "product4T product4THome",
                divSelect: "#BestSellers",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 170,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: "0,3",
                numItems: "6,6",
                caption: "You may also be interested in...",
                productStyle: "product4T product4TPD1",
                divSelect: ".ProductMain",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 15,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: "#CategoryPagingBottom",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $(".ProductActionAdd").length > 15;
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 15,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".GiftCertificate",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#SuggestiveCartContent").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
