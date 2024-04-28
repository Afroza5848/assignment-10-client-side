import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItem = () => {
    const item = useLoaderData();
    const { _id,item_name, massage, photo, price, rating, processing_time } = item;

    console.log('update', item);
    
    const [subCatOption, setSubCatOption] = useState('');
    const [customOption, setCustomOption] = useState('');
    const [stockOption, setStockOption] = useState('');

    const handleUpdateItem = event => {
        event.preventDefault();
        const form = event.target;
        const item_name = form.name.value;
        const massage = form.massage.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.time.value;
       

        const updateItems = { item_name, massage, photo, price, rating, processing_time, subCatOption, customOption, stockOption };
        console.log(updateItems);

        fetch(`http://localhost:5000/items/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(updateItems)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Update Art&Craft item Successfully.",
                        icon: "success"
                    });
                    form.reset();
                }
            })
    }
    // get select option
    const handleSubCatSelect = e => {
        setSubCatOption(e.target.value)
    }
    const handleCustomizationSelect = e => {
        setCustomOption(e.target.value)
    }
    const handleStockSelect = e => {
        setStockOption(e.target.value)
    }

    return (
        <section className="p-6  text-gray-900  py-10">
            <form onSubmit={handleUpdateItem} className="container flex flex-col mx-auto space-y-12">
                <div className="space-y-2 text-center">
                    <p className="font-medium poppins text-3xl poppins text-orange-500">Update Art&Craft Item</p>
                    <p className="text-sm">Click on the Add Product button to initiate the process of adding a new item.!</p>
                </div>
                <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-sm bg-gray-200">

                    <div className="grid grid-cols-6 gap-4 col-span-full">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="itemName" className="text-xl poppins">Item Name</label>
                            <input id="itemName" type="text" name="name" defaultValue={item_name} placeholder=" Write Item Name" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-xl poppins">Subcategory Name</label>
                            <select onChange={handleSubCatSelect} className="pb-8 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600  dark:text-gray-900  bg-white pt-2 pl-2 ">
                                <option className="" disabled selected>Select Category</option>
                                <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
                                <option value="Wooden Home Decor">Wooden Home Decor</option>
                                <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
                                <option value="Jute Home Decor">Jute Home Decor</option>
                                <option value="Jute Kitchenware & utensils">Jute Kitchenware & utensils</option>
                                <option value="Jute and wooden jewellery">Jute and wooden jewellery</option>
                            </select>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="lastname" className="text-xl poppins">Short description</label>
                            <textarea id="bio" cols="6" rows="8" name="massage" defaultValue={massage.slice(0,70)} placeholder="Write short description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 bg-white focus:dark:ring-orange-600 dark:border-gray-300 pt-2 pl-2 "></textarea>
                        </div>
                        <div className="col-span-full ">
                            <label htmlFor="itemName" className="text-xl poppins">Photo URL</label>
                            <input id="itemName" type="text" name="photo" defaultValue={photo} placeholder=" Write your Photo URL" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-xl poppins">Price</label>
                            <input id="itemName" type="text" name="price" defaultValue={price} placeholder=" Write your product price" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-xl poppins">Rating</label>
                            <input id="itemName" type="text" name="rating" defaultValue={rating} placeholder=" Write your product rating" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="lastname" className="text-xl poppins">Customization</label>
                            <select onChange={handleCustomizationSelect} className="pb-8 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600  dark:text-gray-900  bg-white pt-2 pl-2 ">
                                <option className="" disabled selected>Select Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="city" className="text-xl poppins">Processing Time</label>
                            <input id="itemName" type="text" name="time" defaultValue={processing_time} placeholder=" Write your product processing time" className="w-full pb-8 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600 dark:text-gray-900 bg-white pt-2 pl-2 " />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-xl poppins">Stock Status</label>
                            <select onChange={handleStockSelect} className="pb-8 w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-orange-600  dark:text-gray-900  bg-white pt-2 pl-2 ">
                                <option className="" disabled selected>Select Stock status</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Made To Order">Made To Order</option>
                            </select>
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <input className="bg-orange-500 font-bold monts text-white py-4 px-2 w-full rounded-md mx-auto text-xl text-center" type="submit" value="Update Item" />
                        </div>

                    </div>
                </fieldset>

            </form>
        </section>
    );
};

export default UpdateItem;