(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.themagickalcat.com",
            alias: "Magickal",
            GA_UA: "UA-21459813-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/114/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/114/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/114/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "Price: ",
            salePricePrefix: "Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 4,
                numItems: 20,
                caption: "Top Sellers",
                showCaption: false,
                productStyle: "product4T product4THome",
                //Matches the featured products table. Apparently :last-of-type isn't supported by IE8.
                divSelect: "table[cellspacing=10]",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                wrapper: "<table width='100%'><tr><td></td></tr></table>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".colors_pricebox",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 130,
                wrapper: "<table width='100%' class='toutWrapper4T'><tr><td><table width='395' align='center'><tr><td></td></tr></table></td></tr></table>",
                inCart: false
            },
                 {
                     enable: true,
                     resultType: 3,
                     numItems: 8,
                     caption: "Customers also viewed...",
                     productStyle: "product4T product4TPD2",
                     divSelect: ".colors_lines_light",
                     divPosition: "replace",
                     carousel: {
                         numVis: 4,
                         circular: true
                     },
                     maxImageHeight: 120,
                     showRatings: true,
                     wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                     inCart: false
                 }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 20,
                caption: "Top Sellers in this Department",
                productStyle: "product4T product4TCat",
                divSelect: "#MainForm",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && _4TellBoost.Service.catId != 13;
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 20,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "#v65-cart-checkout-parent",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
