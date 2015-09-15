(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.handsontools.com",
            alias: "Handsont",
            GA_UA: "UA-43431728-1",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='More Details' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
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
                resultType: 4,
                numItems: 20,
                caption: "Top Sellers",
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: "#HOME4T",
                divPosition: "replace",
                carousel: {
                    items: 5,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                numRows: 2,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<div class='HOME4T'></div>",
                showRatings: false,
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
                        $("tr:has(img[src*=featured]):last").hide();
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Customers also bought...",
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: "#column1 > table:first",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed...",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TPD2",
                divSelect: "#REL4T",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).parents("table").css("table-layout", "fixed");
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
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: "#column1 > table:first",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "You may also like...",
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: "#column1 > table:first",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("table.alternative, .checkout-headers").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
