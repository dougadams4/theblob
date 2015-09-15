(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.nutrivitasuplementos.com",
            alias: "nutrivit",
            GA_UA: "UA-12949390-6",
            platform: "4TellBc.js",
            addCartBtnAtts: "a class='icon-cart btn'> </a ",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            pricePrefix: "",
            salePricePrefix: "",
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
                //Accented �
                caption: "Sugerimos tamb&#233;m!",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: ".yotpo-main-widget",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && window.outerWidth > 1000;
                    }
                },
                inCart: false
            }, {
                enable: false,
                resultType: 3,
                numItems: 12,
                caption: "Produtos Similares",
                showCaption: false,
                productStyle: "product4T product4TPD2",
                divSelect: "#SideProductRelated",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && window.outerWidth > 1000;
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
                numItems: 6,
                caption: "Complemente sua compra...",
                productStyle: "product4T product4TVC",
                divSelect: ".ProceedToCheckout br",
                divPosition: "above",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && window.outerWidth > 1000;
                    },
                    preDisplay: function () {
                        //$("#SuggestiveCartContent").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
