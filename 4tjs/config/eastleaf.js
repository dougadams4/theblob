(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.easternleaf.com",
            alias: "eastleaf",
            GA_UA: "UA-325354-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/elimages/4tcross.gif",
            spacerImage: "/v/vspfiles/templates/110/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/110/images/nophoto.gif",
            pricePrefix: "Price: ",
            salePricePrefix: "<span style='color: #AE2323'>Sale Price: </span>",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 9,
                caption: "Some items that might interest you...",
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_hm_4tell",
                divPosition: "replace",
                carousel: {
                    circular: true,
                    numVis: 3
                },
                showRatings: true,
                showBuyButton: false,
                wrapper: "<table width='100%' align='center'><tr><td style='border: none;'></td></tr></table>",
                inCart: false
            }],
            //Also putting it on some blog pages.
            Auto: [{
                enable: true,
                resultType: 1,
                numItems: 15,
                caption: "Some items that might interest you...",
                productStyle: "product4T product4TPD2",
                divSelect: "#tout1_hm_4tell",
                divPosition: "replace",
                carousel: {
                    circular: true,
                    numVis: 5
                },
                showRatings: true,
                showBuyButton: false,
                wrapper: "<table width='100%' align='center'><tr><td style='border: none;'></td></tr></table>",
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 9,
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".colors_pricebox",
                divPosition: "below",
                carousel: {
                    circular: true,
                    numVis: 3
                },
                showRatings: true,
                showBuyButton: false,
                wrapper: "<table width='100%' align='center'><tr><td style='border: none;'></td></tr></table>",
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 10,
                caption: "Our customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#ProductDetail_ProductDetails_div2",
                divPosition: "below",
                carousel: {
                    circular: true,
                    numVis: 5
                },
                showRatings: true,
                showBuyButton: false,
                wrapper: "<table width='750px' align='center'><tr><td style='border: none;'></td></tr></table>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).siblings('br').attr('clear', 'both');
                    }
                },
                inCart: false
            }],
            Category: [{
                enable: false
            }],
            Search: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                orientation: "horizontal",
                divSelect: "table#v65-cart-checkout-parent td:eq(1)",
                divPosition: "below",
                carousel: {
                    scrollStyle: "scrollable",
                    numVis: 2,
                    circular: true
                },
                showRatings: true,
                showBuyButton: false,
                wrapper: "<td style='border:none; width:250px;' valign='top'></td>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
