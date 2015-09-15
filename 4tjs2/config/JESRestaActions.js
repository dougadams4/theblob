(function (_4TellBoost, $, undefined) {
    _4TellBoost.Service.customLoaded = true;

    _4TellBoost.detectCartPage = function () {
        //First, check to see if this came from email.
        var emailRec = location.search.match(/(?:4Tee=)([\w+,?]+)[&\?]?/);
        if (emailRec && emailRec.length) {
            var params = emailRec[1].split(",");
            //Sometimes the productID has dashes in it, which causes Volusion to freak out,
            //so we have to scrape the productID off the page.
            var id = params[2] || $("input[name=item_id]").val();
            _gaq.push(['_setAccount', _4TellBoost.SiteInfo.GA_UA],
                ['_trackEvent', "4TellRecsEmail", "Email-" + params[0] + "-" + params[1], id]);
        }

        //Detect PDP.
        var prodImg = $("#listing_main_image_link, input[name=item_id]");
        if (prodImg && prodImg.length) {
            _4TellBoost.setPageType('ProductDetail');
            var prodID = $("input[name=item_id]").val();
            if (prodID) {
                _4TellBoost.addProductID(prodID);
            }
            return;
        }

        //VC Page
        var cartForm = $("form[name=shipquote]");
        if (cartForm && cartForm.length) {
            _4TellBoost.setPageType('AddToCart');
            _4TellBoost.UserData.clearCart();
            //Difference from the main 4Tell3d.js
            var prodLinks = $("#recalculate").find("div.item-image");
            prodLinks.each(function () {
                var link = $(this).find("a");
                var id = link.attr("href").replace(".html", "");
                //Short-circuit evaluation rocks.
                id = id && id.match(/\d+$/);
                var quantity = $(this).find("input[name*=qty]").val() || 1;
                if (id && id[0]) {
                    _4TellBoost.addCartItem(id[0], quantity);
                }
            });
            return;
        }

        //Category and search pages.
        var catForm = $("form[name=frmsortby]");
        if (catForm && catForm.length) {
            if (catForm.attr("action").match(/category/)) {
                _4TellBoost.setPageType("Category");
                var CATID = catForm.attr("action").match(/\d+/)[0];
                _4TellBoost.setCatId(CATID);
            } else {
                //Search page.
                _4TellBoost.setPageType('Search');
                prodImg = $("a[href*=_p_]:has(img)");
                prodImg.each(function (index) {
                    if (index >= 20)
                        return false;
                    var id = $(this).attr("href");
                    //Short-circuit evaluation rocks.
                    id = id && id.match(/(\d+)/g);
                    if (id) {
                        _4TellBoost.addProductID(id[id.length - 1]);
                    }
                });
            }
            return;
        }

        //Checkout page. Used primarily as alternate source of cart items. 
        var checkout = window.location.pathname.match("checkout");
        if (checkout && checkout.length) {
            //Might be order confirmation page
            var orderConf = $("#Table9  td.item").filter(":contains(ADDRESS)");
            if (orderConf && orderConf.length) {
                _4TellBoost.setPageType('OrderConfirmation');
                _4TellBoost.reportSales();
            } else {
                _4TellBoost.setPageType("Checkout");
                var prodLinks = $("td.item[align=left]:has(a)");
                if (prodLinks && prodLinks.length) {
                    _4TellBoost.UserData.clearCart();
                    prodLinks.each(function () {
                        var id = $(this).find("a").attr("href").replace(".html", "");
                        //Short-circuit evaluation rocks.
                        id = id && id.match(/(?:p_)(\d+)$/);
                        id = (id && id[1]);
                        var quantity = $(this).next().text().trim();
                        quantity = quantity.replace(/\$\d+\.?\d+/mg, "").match(/\d+/);
                        quantity = (quantity && quantity[0]) || 1;
                        if (id && quantity) {
                            _4TellBoost.addCartItem(id, quantity);
                        }
                    });
                }
            }
            return;
        }

        return "Auto";
    };

    _4TellBoost.getBuyBtn = function (tout, itemdata) {
        var buyWrapper = $("<div class='productBuy' />");
        var buyBtn = $("<" + _4TellBoost.SiteInfo.addCartBtnAtts + " />");
        if (_4TellBoost.SiteInfo.addCartImage) {
            var buyBtnImage = '';
            if (_4TellBoost.SiteInfo.includeBase)
                buyBtnImage = '//' + _4TellBoost.SiteInfo.baseURL + '/';
            buyBtnImage += _4TellBoost.SiteInfo.addCartImage;
            buyBtn.attr("src", buyBtnImage);
        }
        if (buyBtn)
            buyBtn.appendTo(buyWrapper);
        var newAddress = "";
        if (_4TellBoost.SiteInfo.includeBase)
            newAddress = 'http://' + _4TellBoost.SiteInfo.baseURL; //link to PDP should not be https
        newAddress += '/add_cart.asp?quick=1&item_id=' + encodeURI(itemdata.productID);

        //can't wrap with a-href in IE so add new address to the onclick handler
        buyBtn.click(function () {
            CartAjax.quick_add(itemdata.productID, this);
            _4TellBoost.TrackClick(tout.toutType, itemdata.productID);
        });
        return buyWrapper;
    };

}(window._4TellBoost = window._4TellBoost || {}, jQuery));
//self-invoked namespace that protects $ and undefined internally
