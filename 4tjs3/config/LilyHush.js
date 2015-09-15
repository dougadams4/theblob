(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.lilyhush.com",
            alias: "LilyHush",
            GA_UA: "UA-27569850-1",
            platform: "4TellBc.js",
            addCartBtnAtts: "input type='button' value='Add To Cart'",
            addCartImage: "/templates/Munchen/images/turquoise/AddCartButton.gif",
            emptyImage: "/templates/Munchen/images/ProductDefault.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: true,
            ratings: [
            "/templates/Munchen/images/IcoRating0.gif",
            "/templates/Munchen/images/IcoRating1.gif",
            "/templates/Munchen/images/IcoRating2.gif",
            "/templates/Munchen/images/IcoRating3.gif",
            "/templates/Munchen/images/IcoRating4.gif",
            "/templates/Munchen/images/IcoRating5.gif"
            ],
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false,
                resultType: 1,
                numItems: 12,
                caption: "<h2>Recommended for you</h2>",
                //captionStyle: "titles product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: "#HOME4T",
                divPosition: "replace",
                carousel: {
                    scrollPerPage: true,
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 170,
                showRatings: false,
                //showBuyButton: false,
                showPrice: false,
                wrapper: "<div id='HOME4T'></div>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Our Customers Also Bought...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: "div.ProductMain",
                divPosition: "below",
                carousel: {
                    scrollPerPage: true,
                    itemsCustom: [[0, 2], [400, 3]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                //showBuyButton: false,
                showPrice: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD4T'></div>",
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Our Customers Also Viewed",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: "div#ProductByCategory",
                    divPosition: "replace",
                    carousel: {
                        scrollPerPage: true,
                        items: 4,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    maxImageHeight: 160,
                    showRatings: false,
                    //showBuyButton: false,
                    showPrice: false,
                    wrapper: "<div class='PD4T' style='width: 100%;'></div>",
                    rawJS: {
                        preInit: function (tout) {
                            $('#SimilarProductsByCustomerViews').hide();
                            $(tout.divSelect).after('<hr class=\"Clear\"/>');
                        }
                    },
                    inCart: false
                }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Our Customers Also Bought...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TCat",
                divSelect: "div.CAT4T",
                divPosition: "replace",
                carousel: {
                    scrollPerPage: true,
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                showBuyButton: false,
                showPrice: false,
                maxImageHeight: 150,
                wrapper: "<div class='CAT4T'></div>",
                inCart: false
            }],
            Search: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Our Customers Also Bought...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TSearch",
                divSelect: "div.SRCH4T",
                divPosition: "replace",
                carousel: {
                    scrollPerPage: true,
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                showBuyButton: false,
                showPrice: false,
                maxImageHeight: 150,
                wrapper: "<div class='SRCH4T'></div>",
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You May Also Like...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: "#SuggestiveCartContent",
                divPosition: "replace",
                carousel: {
                    scrollPerPage: true,
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                wrapper: "<div style='float: left; width: 100%;'></div>",
                maxImageHeight: 100,
                showRatings: false,
                //showBuyButton: false,
                showPrice: false,
                inCart: false
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
