const productApi = {
    save(product) {
        //create an array
        const products = productApi.getAll();
        products.push(product);
        //serialize JSON
        const json = JSON.stringify(products);
        //save to local storage
        localStorage.setItem('products', json);
    },
    get() {
        //use get all to fetch applicats
        const products = productApi.getAll();
        //return
        // tomorrow we will find the right one
        return products[0];
    },
    getAll() {
        //get from local storage
        const json = localStorage.getItem('products');
        //deserialize
        let products = JSON.parse(json);
        if(!products) {
            products = [];
        }
        return products;
    }
};

export default productApi;