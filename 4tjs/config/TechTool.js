(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.techtoolsupply.com",
            alias: "TechTool",
            GA_UA: "UA-739238-1",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/v/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/v/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/v/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "<span style='color:black'>TTS Price: </span>",
            salePricePrefix: "<span style='color:black'>On Sale: </span>",
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
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".colors_pricebox",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<table width='450' align='right' class='toutWrapper4T' style='margin-top:5px'><tr><td></td></tr></table>",
                rawJS: {
                    preInit: function (tout) {
                        //Better way: Find .product_discountprice and take its ID.
                        var whichTier = $(".product_discountprice").attr("id");
                        whichTier = whichTier && whichTier.match(/\d$/);
                        var tiers = { 5: "ap5", 2: "ap2", 1: "ap1" };
                        if (whichTier && whichTier[0] && tiers[whichTier[0]] !== undefined)
                            tout.columns.custom.customPrice = tiers[whichTier[0]];
                    },
                    perProduct: function (itemdata) {
                        if ("" !== itemdata.salePrice) {
                            itemdata.salePrice = (!itemdata.customPrice || itemdata.salePrice < itemdata.customPrice) ? itemdata.salePrice : itemdata.customPrice;
                            _4TellBoost.SiteInfo.salePricePrefix = "<span style='color:black'>Sale Price: </span>";
                        } else {
                            itemdata.salePrice = itemdata.customPrice;
                            var whichTier = _4TellBoost.Touts[0].columns.custom.customPrice;
                            var pricePrefixes = { ap5: "<span style='color:black'>Tier 1 Price: </span>", ap2: "<span style='color:black'>Contractor Price: </span>", ap1: "<span style='color:black'>Wholesale Price: </span>", TTS: "<span style='color:black'>Sale Price: </span>" };
                            _4TellBoost.SiteInfo.salePricePrefix = pricePrefixes[whichTier];
                        }
                    }

                },
                inCart: false
            },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 4,
                    caption: "Customers also viewed...",
                    captionStyle: "product4TCaption product4TCaption2",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#vCSS_mainform td[width*=15]",
                    divPosition: "replace",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<td width='15%' valign='top'><table align='right'class='toutWrapper4T' style='margin-top: 17px;height:1030px;'><tr><td align='top'></td></tr></table></td>",
                    rawJS: {
                        preInit: function (tout) {
                            var whichTier = $(".product_discountprice").attr("id");
                            whichTier = whichTier && whichTier.match(/\d$/);
                            var tiers = { 5: "ap5", 2: "ap2", 1: "ap1" };
                            if (whichTier && whichTier[0] && tiers[whichTier[0]] !== undefined)
                                tout.columns.custom.customPrice = tiers[whichTier[0]];
                        },
                        perProduct: function (itemdata) {
                            if ("" !== itemdata.salePrice) {
                                itemdata.salePrice = (!itemdata.customPrice || itemdata.salePrice < itemdata.customPrice) ? itemdata.salePrice : itemdata.customPrice;
                                _4TellBoost.SiteInfo.salePricePrefix = "<span style='color:black'>Sale Price: </span>";
                            } else {
                                itemdata.salePrice = itemdata.customPrice;
                                var whichTier = _4TellBoost.Touts[0].columns.custom.customPrice;
                                var pricePrefixes = { ap5: "<span style='color:black'>Tier 1 Price: </span>", ap2: "<span style='color:black'>Contractor Price: </span>", ap1: "<span style='color:black'>Wholesale Price: </span>", TTS: "<span style='color:black'>Sale Price: </span>" };
                                _4TellBoost.SiteInfo.salePricePrefix = pricePrefixes[whichTier];
                            }
                        }
                    },
                    inCart: false
                }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 15,
                caption: "Related Top Sellers",
                productStyle: "product4T product4TCat",
                divSelect: "form#MainForm",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 150,
                showPrice: false,
                showRatings: false,
                wrapper: "<table width='100%' align='center' ><tr><td></td></tr></table>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $("td.v65-productName").length >= 15 && _4TellBoost.Service.catId !== 72;
                        var whichTier = $(".product_discountprice").attr("id");
                        whichTier = whichTier && whichTier.match(/\d$/);
                        var tiers = { 5: "ap5", 2: "ap2", 1: "ap1" };
                        if (whichTier && whichTier[0] && tiers[whichTier[0]] !== undefined)
                            tout.columns.customPrice = tiers[whichTier[0]];
                    },
                    perProduct: function (itemdata) {
                        itemdata.salePrice = isNaN(itemdata.salePrice) ? itemdata.customPrice : Math.min(itemdata.salePrice, itemdata.customPrice);
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
                numItems: 4,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "table#v65-cart-checkout-parent td:eq(1)",
                divPosition: "below",
                carousel: {
                    circular: true,
                    numVis: 2
                },
                maxImageHeight: 100,
                showPrice: false,
                showRatings: false,
                wrapper: "<td valign='top'><table><tr><td ></td></tr></table</td>",
                rawJS: {
                    preDisplay: function () {
                        $("table:has(span.PageText_L532n):last").remove();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
