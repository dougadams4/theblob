(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.febeauty.com",
            alias: "febeauty",
            GA_UA: "UA-40693858-2",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "Your Price: ",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".sideCol",
                divPosition: "replace",
                showRatings: false,
                maxImageHeight: 150,
                imageSize: "&maxx=120&maxy=0",
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice !== '') {
                            itemdata.salePrice += '<img src="assets/templates/common/images/on_sale.png" alt="On Sale">';
                        }
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: "#REL4T",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<tr><td colspan='2'><div class='PD14T'></div></td></tr>",
                rawJS: {
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice !== '') {
                            itemdata.salePrice += '<img src="assets/templates/common/images/on_sale.png" alt="On Sale">';
                        }
                    }
                }, inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 4,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                setHeight: false,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "tr:has(tr #Button6)",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=140&maxy=130",
                maxImageHeight: 150,
                showRatings: false,
                wrapper: "<tr><td colspan='6'><div class='PD14T'></div></td></tr>",
                rawJS: {
                    perProduct: function (itemdata) {
                        if (itemdata.salePrice !== '') {
                            itemdata.salePrice += '<img src="assets/templates/common/images/on_sale.png" alt="On Sale">';
                        }
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
