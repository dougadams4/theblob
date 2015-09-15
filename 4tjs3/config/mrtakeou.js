(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "mrtakeou",
            GA_UA: "",
            platform: "4TellMv.js",
            custom: true,
            addCartBtnAtts: "form method='post' action='merchant.mvc?Screen=BASK'><input type='hidden' name='Action' value='ADPR'><input type='hidden' name='Quantity' value='1'><input type='submit' value='See Details'></form",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "More Ideas",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: ".bx-wrapper",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: ["<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-left-2.png' />", "<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-right-2.png' />"],
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers Also Bought",
                productStyle: "product4T product4TPD1",
                divSelect: ".mobile-tabs",
                divPosition: "below",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: ["<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-left-2.png' />", "<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-right-2.png' />"],
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        jQuery(".related-products-wrapper").hide();
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers Also Viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".mobile-tabs ~ .cf",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: ["<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-left-2.png' />", "<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-right-2.png' />"],
                    pagination: false
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {},
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
                divSelect: "#category-listing",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: ["<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-left-2.png' />", "<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-right-2.png' />"],
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Don't Forget To Buy...",
                productStyle: "product4T product4TVC",
                divSelect: ".buttons-wrapper",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: ["<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-left-2.png' />", "<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-right-2.png' />"],
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }],
            Auto: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You May Also Like",
                productStyle: "product4T product4TVC",
                divSelect: "#ACLN-content .col-lg-6",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: ["<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-left-2.png' />", "<img src='//www.mrtakeoutbags.com/mm5/images/icons/arrow-right-2.png' />"],
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='ACC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
