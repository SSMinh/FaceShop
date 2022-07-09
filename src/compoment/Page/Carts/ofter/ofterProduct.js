import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '~/compoment/component/Products';
function OfterProduct() {
    const [datas, setDatas] = useState([]);
    // const [loading, setLoading]= useState(true)
    useEffect(() => {
        // setLoading(true)
        const getProduct = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setDatas(response.data);
            //  setLoading(false)
        };
        getProduct();
    }, []);

    const renderProduct = () => {
        const list = datas.filter((res) => {
            return res.rating.count >= 400;
        });
        return list.map((product) => {
            return (
                <div key={product.id} className="col-md-2 d-sm-none d-md-block mb-4">
                    <Products data={product} />
                </div>
            );
        });
    };
    return (
        <div className="container">
            <div className="row">{renderProduct()}</div>
        </div>
    );
}

export default OfterProduct;
