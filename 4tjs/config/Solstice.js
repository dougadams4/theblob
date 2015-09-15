(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.solsticesupply.com/",
            alias: "Solstice",
            GA_UA: "UA-2454024-2",
            platform: "4TellMa.js",
            custom: true,
            addCartBtnAtts: "<button type='button' title='Add to Cart' class='button btn-cart' ><span><span>View Details</span></span></button>",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Auto: [{
                enable: true,
                resultType: 1,
                numItems: 15,
                caption: "<h3>Recommended for you...</h3>",
                captionStyle: "title-container product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: ".product-slider-container-big",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 180,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.location.origin.match("shrd.com")) { tout.enable = false; return; }
                        var spaceAvailable = $("#banners_slider_home_page").outerWidth();
                        if (1170 > spaceAvailable) {
                            tout.carousel = false;
                            tout.numItems = Math.floor(spaceAvailable / 220);
                        }
                        //A less clever man would just do an if statement
                        (2 <= tout.numItems) || (tout.enable = false);
                        if (tout.enable) { $(tout.divSelect).hide(); }
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                //divSelect: "#product_addtocart_form",
                divSelect: "#product_acc_athlete_custom_tab1",
                divPosition: "below",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.location.origin.match("shrd.com")) { tout.enable = false; return; }
                    }
                },
                inCart: false
            },
            {
                enable: true,
                resultType: 3,
                numItems: 4,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".product-tabs-container",
                divPosition: "below",
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.location.origin.match("shrd.com")) { tout.enable = false; return; }
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
                fillMode: "genomic",
                caption: "Related Top Sellers",
                productStyle: "product4T product4TCat",
                divSelect: ".products-grid",
                divPosition: "above",
                maxImageHeight: 200,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.location.origin.match("shrd.com")) { tout.enable = false; return; }
                        tout.enable = tout.enable && $("div.col-main li.item").length > 15;
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".cart-collaterals",
                divPosition: "below",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.location.origin.match("shrd.com")) { tout.enable = false; return; }
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
