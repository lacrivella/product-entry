const productApi = {
    storage: localStorage,
    save(product) {
        // create an array
        const products = productApi.getAll();
        // add this applicant to the array
        products.push(product);
        // serialize JSON
        const json = JSON.stringify(products);
        // save to local storage
        productApi.storage.setItem('products', json);
    },
    get(nickname) {
        // use get all to fetch applicats
        const products = productApi.getAll();
        
        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            if(product.nickname === nickname) {
                return product;
            }
        }
    },
    getAll() {
        // get from local storage
        const json = productApi.storage.getItem('products');
        // deserialize
        let products = JSON.parse(json);
        if(!products) {
            products = [];
        }
        return products;
    }
};

export default productApi;