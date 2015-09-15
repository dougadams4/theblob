(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.hoosierecig.com",
            alias: "HoosierE",
            GA_UA: "UA-44019748-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Top Sellers",
                captionStyle: "menu-headers product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4THome",
                divSelect: "#modTopSellers",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=0",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    //preDisplay: function (tout) {
                    //    $(tout.divSelect).hide();
                    //    jQuery(".header-specials").text(tout.caption);
                    //}
                },
                inCart: false

            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought",
                captionStyle: "product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: "#rTabs",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                imageSize: "&maxx=120&maxy=0",
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    captionStyle: "product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".relatedBlock",
                    divPosition: "replace",
                    carousel: {
                        items: 3,
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<div class='PD14T'></div>",
                    rawJS: {
                        //preInit: function (tout) {
                        //    //if (navigator.userAgent.match(/MSIE\s*8/)) tout.carousel = false;
                        //},
                        preDisplay: function (tout) {
                            jQuery(tout.divSelect).hide();
                        }
                    },
                    inCart: false
                }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 4,
                caption: "Related Top Sellers",
                captionStyle: "menu-headers product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TCat",
                divSelect: "#modTopSellers",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=0",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: "#recalculate",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
