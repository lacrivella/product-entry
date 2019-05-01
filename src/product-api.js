const productApi = {
    save(product) {
        //serialize JSON
        const json = JSON.stringify(product);
        //save to local storage
        localStorage.setItem('product', json);
    },
    get() {
        //get from local storage
        const json = localStorage.getItem('product');
        //deserialize
        const product = JSON.parse(json);
        //return
        return product;
    }
};

export default productApi;