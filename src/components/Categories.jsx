import "./Catgories.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState('all');
    const [newFiltered, setNewFiltered] = useState([]);

    const productCategories = ["all", "men's clothing", "jewelery", "electronics", "women's clothing"];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setItems(response.data);
                setLoading(false);
                setNewFiltered(response.data);
            } catch (error) {
                alert("Error fetching products");
            }
        };
        fetchProducts();
    }, []);

    const handleCategory = (e) => {
        const selectedCategory = e.target.value;
        setCategories(selectedCategory);

        const filteredItems = selectedCategory === 'all'
            ? items
            : items.filter((item) => item.category === selectedCategory);

        setNewFiltered(filteredItems);
    };

    if (loading) {
        return <div className="spinnercont">
        <div className="spinner">
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   <div></div>
   </div>
      </div>
           
        
    }

    return (
        <>
            <div className="selectcont">
                <select name="categories" className="options" onChange={handleCategory} value={categories}>
                    {productCategories.map((category) => (
                        <option value={category} key={category}>{category}</option>
                    ))}
                </select>
                <h2 className="all">All Products</h2>
                <div className="maingrid">
                    {newFiltered.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.image} alt={item.title} className="image"/>
                            <h2 className="title">{item.title}</h2>
                            <p>${item.price}</p>
                            <p>{item.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Categories;