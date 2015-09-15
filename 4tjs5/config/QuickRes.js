(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.qrfs.com",
            alias: "QuickRes",
            GA_UA: "UA-16968061-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Order' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false,
                resultType: 4,
                numItems: 12,
                caption: "Top Sellers",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: "table:has(table.alternative)",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
                wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                rawJS: {
                    preDisplay: function (tout) {
                        $("td.titles").text(tout.caption);
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 8,
                caption: "Our customers also bought...",
                captionStyle: "titles titles2 product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: ".beta-col",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
                wrapper: "<div id='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) { }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TPD2",
                divSelect: ".relatedBlock",
                divPosition: "replace",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div id='PD24T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $('#REL4T, #ACC4T').hide();
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
                numItems: 12,
                caption: "Related Top Sellers",
                captionStyle: "titles  product4TCaption",
                productStyle: "product4T product4TCat",
                divSelect: ".paging:last",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div id='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        //I kinda want to replace this with an array and use indexOf to see if the category's in the list.
                        tout.enable = tout.enable && (_4TellBoost.Service.catId == 18 || _4TellBoost.Service.catId == 14 || _4TellBoost.Service.catId == 23
                     || _4TellBoost.Service.catId == 111 || _4TellBoost.Service.catId == 8 || _4TellBoost.Service.catId == 7 || _4TellBoost.Service.catId == 145
                     || _4TellBoost.Service.catId == 144 || _4TellBoost.Service.catId == 31);
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                captionStyle: "titles titles2 product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: "#recalculate",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div id='VC4T'></div>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
