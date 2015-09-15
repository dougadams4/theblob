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
                resultType: 4,
                numItems: 4,
                caption: "Top Sellers",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: "#main4TellContainer",
                divPosition: "replace",
                imageSize: "&maxx=175&maxy=175",
                rotateRecs: true,
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                carousel: {
                    numVis: 2,
                    circular: true
                },
                caption: "Our Customers Also Bought:",
                captionStyle: "titles product4TCaption",
                divSelect: "#main4TellContainer",
                divPosition: "replace",
                productStyle: "product4T product4TPD1",
                imageSize: "&maxx=120&maxy=120",
                showRatings: false,
                maxImageHeight: 150,
                inCart: false

            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers Who Viewed This, Also Viewed:",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TPD2",
                divSelect: "#second4TellContainer",
                divPosition: "replace",
                carousel: {
                    circular: true,
                    numVis: 4
                },
                imageSize: "&maxx=130&maxy=130",
                maxImageHeight: 180,
                showRatings: true,
                wrapper: "<div class='PD24T toutWrapper4T'></div>",
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
                    numVis: 2,
                    circular: true
                },
                numRows: 2,
                caption: "You May Also Like:",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: "#main4TellContainer",
                divPosition: "replace",
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 140,
                showRatings: true,
                inCart: true
            }],
            Auto: [{
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Top Sellers: ",
                productStyle: "product4T product4TCheck",
                divSelect: "iframe#11450439991",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 140,
                showRatings: true,
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = ($(tout.divSelect) && $(tout.divSelect).length);
                    }
                },
                wrapper: "<table width='100%'><tr><td></td></tr></table>",
                inCart: false
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
