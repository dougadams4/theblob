(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.edcskincare.com",
            alias: "EssDermC",
            GA_UA: "UA-27130071-1",
            platform: "4Tell3d.js",
            //custom: true,
            addCartBtnAtts: 'input type="button" name="Add" value="Add to Cart" class="btnc" onmouseover="this.className=\'btnc_over\'" onmouseout="this.className=\'btnc\'"',
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false
                }
            },
            ProductDetail: [{
                enable: true,
                resultType: 3,
                numItems: 6,
                fillMode: "none",
                caption: "Our Customers Also Viewed...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: "#ATC4T",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                imageSize: "&maxx=90&maxy=90",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<table width='400px' align='center'><tr><td></td></tr></table>",
                rawJS: {
                    preInit: function (tout) {
                        var CTGYCode = $('input[name=category_id]').val();
                        if (CTGYCode === '570' || CTGYCode == '523')
                            tout.numItems = 9;
                    },
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.edcskincare.com/, "");
                    }
                }
            }, {
                enable: true,
                resultType: 0,
                numItems: 12,
                fillMode: "none",
                caption: "Our Customers Also Bought...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TPD2",
                orientation: "horizontal",
                divSelect: "#REL4T",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<tr><td colspan='2'></td></tr>",
                rawJS: {
                    preInit: function (tout) {
                        var CTGYCode = $('input[name=category_id]').val();
                        if (CTGYCode === '570' || CTGYCode == '523') {
                            tout2.enable = false;
                            $('#REL4T').hide();
                        }
                    },
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.edcskincare.com/, "");
                    }
                },
                inCart: false
            }],
            Category: {
                tout1: {
                    enable: false
                }
            },
            Search: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                captionStyle: "titles2 product4TCaption product4TCaptionVC",
                productStyle: "product4T product4TVC",
                divSelect: "#Table15",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.edcskincare.com/, "");
                    }
                },
                inCart: true
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
