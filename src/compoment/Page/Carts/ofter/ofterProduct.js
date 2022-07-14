import React, { useEffect, useState } from 'react';
import Products from '~/compoment/component/Products';
import productApi from '~/api/productApi';
function OfterProduct() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await productApi.getAll();
                setDatas(response);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, []);
    const renderProduct = () => {
        const list = datas.filter((res) => {
            return res.rating.count >= 400;
        });
        return list.map((product) => {
            return (
                <div key={product.id} className="col-md-2 col-4 mb-4">
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
