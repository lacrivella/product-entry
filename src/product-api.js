const productApi = {
    key: 'products',
    save(product) {
        // create an array
        const products = productApi.getAll();
        // add this applicant to the array
        products.push(product);
        // serialize JSON
        const json = JSON.stringify(products);
        // save to local storage
        localStorage.setItem(productApi.key, json);
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
        const json = localStorage.getItem(productApi.key);
        // deserialize
        let products = JSON.parse(json);
        if(!products) {
            products = [];
        }
        return products;
    }
};

export default productApi;