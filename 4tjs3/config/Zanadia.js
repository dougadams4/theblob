(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.Zanadia.com",
            alias: "Zanadia",
            GA_UA: "UA-211504-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "img alt='Add to Cart'",
            addCartImage: "assets/templates/default/images/btn-related-add-to-cart.gif",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Top Sellers",
                productStyle: "product4T product4THome",
                divSelect: "#homeHeader",
                divPosition: "below",
                imageSize: "&maxx=175&maxy=175",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                rotateRecs: true,
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers Also Bought:",
                divSelect: "#rTabs",
                divPosition: "above",
                productStyle: "product4T product4TPD1",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                showRatings: false,
                maxImageHeight: 150,
                inCart: false

            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers Also Viewed:",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TPD2",
                divSelect: ".relatedBlock",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=130&maxy=130",
                maxImageHeight: 180,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                inCart: false
            }],
            Category: [{
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Top Sellers: ",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
                inCart: false
            }],
            Search: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "You May Also Like",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TSearch",
                divSelect: "#main4TellContainer",
                divPosition: "replace",
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 130,
                showRatings: true,
                wrapper: "<div class='SEARCH4T'></div>",
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                numRows: 2,
                caption: "You May Also Like:",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: ".third-party-payment",
                divPosition: "above",
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 140,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                inCart: true
            }],
            QuickCart: [{
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Top Sellers: ",
                productStyle: "product4T product4TQC",
                divSelect: ".quickCartRelated",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 140,
                showRatings: true,
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = ($(tout.divSelect) && $(tout.divSelect).length);
                    }
                },
                wrapper: "<div class='QC4T'></div>",
                inCart: false
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
