(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.gentlemansgazette.com/",
            alias: "Gentlema",
            GA_UA: "UA-13208334-3",
            platform: "4TellMa.js",
            custom: true,
            addCartBtnAtts: "<button type='button' value='View Details'>View Details</button>",
            pricePrefix: "",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: false,
        },
        PageSettings: {
            Auto: [{
                enable: false
            }],
            Home: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: "#header_mainmenu",
                divPosition: "below",
                carousel: {
                    items: 4,
                    itemsCustom: [[0,1],[480,2],[768,3],[992,4],[1200,4],[1400,4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                     preInit: function(tout) {
                           $("#tout1_hm_4Tell").parent("div").children('h3').hide();
                     },
                     perProduct: function(itemdata) {
                         if(itemdata.title.length > 20) {
                               itemdata.title = itemdata.title.substring(0,17) + "...";
 
                         }
                     }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 3,
                numItems: 8,
                showCaption: true,
                caption: "Recommended for You",
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    itemsCustom: [[0,1],[480,2],[768,3],[992,4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                     preInit: function(tout) {
                         $("#tout1_pdp_4Tell").parent("div").children("h2").hide();
                     },
                     perProduct: function(itemdata) {
                         if(itemdata.title.length > 20) {
                               itemdata.title = itemdata.title.substring(0,17) + "...";
 
                         }
                     }
                },
                inCart: false
             },{
                enable: true,
                appendResults: true,
                resultType: 0,
                numItems: 7,
                startPosition: 1
             }],
            AddToCart: [{
                enable: false
            }]
        }
    }
}(window._4TellBoost, window._4TellBoost.jq || jQuery));
