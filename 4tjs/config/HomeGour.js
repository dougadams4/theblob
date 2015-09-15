(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "shop.homemadegourmet.com",
            alias: "HomeGour",
            GA_UA: "UA-15437023-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "button type='button' value='Add To Cart' class='btn'>Add to cart</button",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: false,
                resultType: 4,
                numItems: 4,
                caption: "Top Sellers",
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: "#homeimageblocks",
                divPosition: "below",
                imageSize: "&maxx=100&maxy=100",
                showRatings: true,
                maxImageHeight: 130,
                wrapper: "<div class='HOME4T'></div>",
                rotateRecs: true,
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "Customers also bought...",
                captionStyle: "checkout-headers product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#modTopSellers",
                divPosition: "replace",
                imageSize: "&maxx=160&maxy=0",
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Similar Items...",
                    captionStyle: "checkout-headers product4TCaption product4TCaptionPD2",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".relatedBlock",
                    divPosition: "replace",
                    carousel: {
                        items: 3,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    imageSize: "&maxx=125&maxy=150",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<div class='PD24T'></div>",
                    rawJS: {},
                    inCart: false
                }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                captionStyle: "checkout-headers product4TCaption2",
                productStyle: "product4T product4TVC",
                divSelect: "#recalculate",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=130",
                maxImageHeight: 150,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
