import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SelectedCategory = () => {
    const [items,setItems] = useState([])
    const {subcategory_Name} = useParams();
    console.log(items);
    useEffect(() => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
    },[])

    const filterData = items.filter(item => item.subCatOption === subcategory_Name)
    console.log(filterData);

    return (
        <div>
            
        </div>
    );
};

export default SelectedCategory;