(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.Zanadia.com",
            alias: "Zanadia",
            GA_UA: "UA-211504-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
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
                caption: "Recommended for you",
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
                showRatings: false,
                wrapper: "<div class='HOME4T'></div>",
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
                productStyle: "product4T product4TPD1",
                divSelect: ".rewardsPointsBlock",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=130&maxy=130",
                maxImageHeight: 180,
                showRatings: false,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && !jQuery(".dontShow4T").length;
                    },
                    preDisplay: function () {
                        jQuery(".accessoriesBlock, .relatedBlock").hide();
                    }
                },
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
                showRatings: false,
                maxImageHeight: 150,
                inCart: false
            }],
            Search: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You May Also Like",
                productStyle: "product4T product4TSearch",
                divSelect: "#newreleases",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 130,
                showRatings: false,
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
                caption: "You May Also Like:",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: ".third-party-payment",
                divPosition: "below",
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 140,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                inCart: true
            }],
            QuickCart: [{
                enable: false,
                resultType: 0,
                numItems: 12,
                caption: "You may also like: ",
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
                showRatings: false,
                rawJS: {},
                wrapper: "<div class='QC4T'></div>",
                inCart: false
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
