(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "tradecou",
            GA_UA: "UA-1145576-1",
            platform: "4TellDIY.js",
            addCartBtnAtts: "input type='button' value='Buy' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
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
                enable: true,
                resultType: 1,
                numItems: 15,
                caption: "Our customers also bought...",
                productStyle: "product4T product4THome",
                divSelect: "#tout1_hm_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: true,
                showBuyButton: true,
                maxImageHeight: 150,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: false,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "#frmProduct1 ~ .delivery-icons, .PD14T",
                divPosition: "below",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 4,
                caption: "Customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#tout1_pdp_4Tell, .PD24T",
                divPosition: "replace",
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.addProductID($("#tout1_pdp_4Tell").data().products.toString());
                    }
                },
                inCart: false
            }, {
                enable: false,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#tout2_pdp_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Most Popular items",
                productStyle: "product4T product4TCat",
                divSelect: "#tout1_cat_4Tell, .CAT4T",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showBuyButton: false,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "#tout1_cart_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                showBuyButton: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }],
            QuickCart: [{
                enable: true,
                resultType: 3,
                numItems: 6,
                caption: "You may also like...",
                productStyle: "product4T product4TQC",
                divSelect: "#tout1_quickcart_4tell",
                divPosition: "replace",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                showBuyButton: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));

//$("#ProductDetailItemWrapper1").empty();$(".product4TQC").slice(2, 6).clone(true).removeClass("product4TQC").addClass("product4TPD2").appendTo("#ProductDetailItemWrapper1");

var detectCart = setInterval(function () {
    var quickCart = $("#tout1_quickcart_4Tell, #tout1_qcart_4Tell");
    if (quickCart && quickCart.length) {
        _4TellBoost.Service.called = false;
        _4TellBoost.Service.lastDivIDs = [];
        _4TellBoost.setPageType("QuickCart");
        _4TellBoost.getRecommendations("Auto", "");
        clearInterval(detectCart);
    }
}, 200);
