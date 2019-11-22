const model = {
    productInfo: null,
    currentProductDetail: null
}

model.saveProductInfo = function(info){
    model.productInfo = info
}

model.saveCurrentProductDetail = function(info){
    model.currentProductDetail = info
}
