(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.GolfeTail.com",
            alias: "GolfeTaM",
            GA_UA: "UA-739687-1",
            platform: "4TellMa.js",
            custom: true,
            addCartBtnAtts: "<input type='image' value=''/>",
            addCartImage: "//az416957.vo.msecnd.net/4tjs/images/see-details-button.png",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Deals ... Just for You!",
                captionStyle: "product4TCaption product4TCaptionHome",
                productStyle: "product4T product4THome",
                divSelect: "#brands",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 170,
                wrapper: "<div style='width:100%;background:#f9f9f9'></div>",
                rawJS: {

                },
                incart: false
            }],
            ProductDetail: [{
                enable: false,
                resultType: 0,
                //fillMode: "genomic",
                numItems: 4,
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: "#odp",
                divPosition: "replace",
                showRatings: true,
                showBuyButton: false,
                maxImageHeight: 150,
                wrapper: "<div id='PD14T'></div>",
                inCart: false
            },
                {
                    enable: false,
                    resultType: 3,
                    numItems: 8,
                    caption: "<img src='//az416957.vo.msecnd.net/4tjs/images/golfers-also-viewed-header.gif' />",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#home-top10",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    showBuyButton: false,
                    wrapper: "<div id='PD24T'></div>",
                    inCart: false
                }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Category Top Sellers",
                captionStyle: "product4TCaption product4TCaptionCat",
                productStyle: "product4T product4TCat",
                divSelect: "#description",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 130,
                showRatings: true,
                wrapper: "<div id='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) { }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: false,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                orientation: "horizontal",
                divSelect: "#AlternativeCheckouts2",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<tr><td colspan='2'><div id='VC4T'></div></td></tr>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
