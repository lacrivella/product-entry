const productApi = {
    save(product) {
        //create an array
        const products = [];
        products.push(product);
        //serialize JSON
        const json = JSON.stringify(products);
        //save to local storage
        localStorage.setItem('products', json);
    },
    get() {
        //get from local storage
        const json = localStorage.getItem('products');
        //deserialize
        const products = JSON.parse(json);
        //return
        return product;
        return products[0];
    }
};

export default productApi;