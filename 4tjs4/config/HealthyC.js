(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "shop.healthychoicenaturals.com/",
            alias: "HealthyC",
            GA_UA: "UA-921033-1",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/105/images/Bullet_MoreInfo.gif",
            spacerImage: "/v/vspfiles/templates/105/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/105/images/nophoto.gif",
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
            ProductDetail: [

                {
                    enable: true,
                    resultType: "3,0",
                    numItems: "3,3",
                    caption: "Customers also viewed",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 150,
                    showRatings: true,
                    showPrice: false,
                    wrapper: "<table width='100%' style='border-top: 2px solid #CCC;'><tr><td></td></tr></table>",
                    inCart: false
                }
            ],
            Search: {
                tout1: {
                    enable: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 150,
                    showRatings: true,
                    showPrice: false,
                    wrapper: "<td><div style='width: 340px;'></div></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
