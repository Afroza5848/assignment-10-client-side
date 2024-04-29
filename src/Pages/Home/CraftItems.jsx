import { useEffect, useState } from "react";
import { GiPriceTag } from "react-icons/gi";
import { Link } from "react-router-dom";


const CraftItems = () => {
    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div className="container mx-auto my-14">
            <div className="text-center mb-12">
                <h2 className="text-4xl eb-serif text-orange-500 font-bold">Art & Craft Materials</h2>
                <p>It is hard to please all your customers but you can increase customer satisfaction and decrease returns by including a complete product description for every item you sell.</p>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-14">
                {
                    items.slice(0, 6)?.map(item => <div key={item._id} className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={item.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-4">
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-2xl poppins font-bold dark:text-gray-800 flex items-center gap-2"><GiPriceTag className="text-orange-600" />{item.item_name}</h3>
                                </a>
                                <p className="dark:text-gray-800">{item.massage.slice(0, 100)}......</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div>
                                    <h2 className="text-lg font-semibold poppins text-gray-600 flex items-center gap-1">Price : <span className="font-normal monts ml-2"> ${item.price}</span></h2>
                                </div>
                                <div className="flex items-center gap-3">

                                    <h2 className="text-lg font-semibold poppins flex text-gray-600 items-center gap-1">Rating : <span className="font-normal monts ml-2"> {item.rating}</span></h2>

                                </div>
                            </div>
                            <Link to={`/items/${item._id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-orange-500 dark:text-gray-50">View Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CraftItems;