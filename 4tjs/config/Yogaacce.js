(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.yogaaccessories.com",
            alias: "Yogaacce",
            GA_UA: "UA-418944-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='image'",
            addCartImage: "assets/templates/v30014/images/addcart_btn.gif",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
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
                numItems: 12,
                caption: "Customers who bought this, also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "#ACC4T",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 190,
                wrapper: "<tr><td></td></tr>",
                inCart: false
            },
               {
                   enable: true,
                   resultType: 3,
                   numItems: 8,
                   caption: "Customers who viewed this product, also viewed...",
                   productStyle: "product4T product4TPD2",
                   divSelect: "#REL4T",
                   divPosition: "replace",
                   carousel: {
                       numVis: 4,
                       circular: true
                   },
                   imageSize: "&maxx=120&maxy=120",
                   maxImageHeight: 190,
                   showRatings: true,
                   wrapper: "<tr><td></td></tr>",
                   inCart: false
               }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                fillMode: "genomic",
                caption: "Related Top Sellers",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TCat",
                divSelect: "tr:has(td.page_headers, h1, tr a>strong)",
                divPosition: "below",
                imageSize: "&maxx=100&maxy=100",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                showBuyButton: false,
                wrapper: "<tr><td><div class='PD14T'></div></td></tr>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && ["2550", "1094", "1082", "1002", "1037"].indexOf(_4TellBoost.Service.catId) > 0;
                    }
                },
                inCart: false
            }],
            Auto: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                fillMode: "genomic",
                caption: "Related Top Sellers",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TCat",
                divSelect: "tr:has(td.page_headers, h1, tr a>strong)",
                divPosition: "below",
                imageSize: "&maxx=100&maxy=100",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                showBuyButton: false,
                wrapper: "<tr><td><div class='PD14T'></div></td></tr>",
                rawJS: {
                    preInit: function (tout) {
                        var catPage = window.location.pathname.match(/\d+/)[0];
                        tout.enable = tout.enable && ["2550", "1094", "1082", "1037", "1033"].indexOf(catPage) > 0;
                        _4TellBoost.setPageType("Category");
                        var catList = jQuery.map($("a:has(h2)"), function (element) {
                            return $(element).attr("href").match(/\d+/);
                        }).join(",") + "," + catPage;
                        _4TellBoost.setCatId(catList);
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "tr:has(#Table4)",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 190,
                showRatings: true,
                wrapper: "<tr><td colspan='6'></td></tr>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
