import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/action";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(
        (state)=>state.product?.products || [],
    );

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);

    return (
        <div>
            <h1>Products</h1>
            <div style={{display:"flex"}}>
                {products.map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home;