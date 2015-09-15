(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.gentlemansgazette.com/",
            alias: "Gentlema",
            GA_UA: "UA-13208334-3",
            platform: "4TellMa.js",
            custom: true,
            addCartBtnAtts: "<button type='button' value='View Details'>View Details</button>",
            pricePrefix: "",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "WELCOME TO THE GENTLEMAN'S GAZETTE SHOP - HERE ARE SOME RECOMMENDATIONS FOR YOU",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4THome",
                divSelect: ".homenew",
                divPosition: "above",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }],
            //Strange home page.
            Auto: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "WELCOME TO THE GENTLEMAN'S GAZETTE SHOP - HERE ARE SOME RECOMMENDATIONS FOR YOU",
                productStyle: "product4T product4THome",
                divSelect: ".homenew",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: "3,0",
                numItems: "8,7",
                caption: "Frequently bought together...",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TPD2",
                divSelect: ".yotpo-main-widget",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }, {
                enable: false,
                resultType: 0,
                numItems: 12,
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".more-views",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }],
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 15,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: ".cart .clear",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div class='PD14T'></div>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
