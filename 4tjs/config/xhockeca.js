(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.xhockeyproducts.ca/",
            alias: "xhockeca",
            GA_UA: "UA-19394630-1",
            platform: "4TellMa.js",
            addCartBtnAtts: "<button type='button' title='Add to Cart' class='button btn-cart'>Add to Cart</button>",
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
                caption: "Customers also bought",
                productStyle: "product4T product4TPD1",
                divSelect: ".box-up-sell",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 80,
                wrapper: "<div id='PD14T' style='float:left'></div>",
                rawJS: {},
                inCart: false
            },
                 {
                     enable: true,
                     resultType: 3,
                     numItems: 3,
                     caption: "More ideas for you",
                     productStyle: "product4T product4TPD2",
                     divSelect: ".block-related",
                     divPosition: "replace",
                     maxImageHeight: 160,
                     showRatings: true,
                     wrapper: "<div id='PD24T'></div>",
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
                caption: "You may also like",
                productStyle: "product4T product4TVC",
                divSelect: ".mobile-grid-half",
                divPosition: "below",
                carousel: {
                    circular: true,
                    numVis: 4
                },
                maxImageHeight: 140,
                showRatings: true,
                wrapper: "<div id='VC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $(".crosssell").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
