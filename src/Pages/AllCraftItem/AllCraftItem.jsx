import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllCraftItem = () => {
    const [loading,setLoading] = useState(true);
    const items = useLoaderData();

    useEffect(() => {
        if(!items){
            setLoading(true);
        }
        setLoading(false)
    },[items])

    if(loading){
        return <div className='flex justify-center mt-20'><span className="loading loading-bars loading-lg text-orange-600 "></span></div>
    }
   
    console.log(items)
    return (
        <div>
            <div className="container p-2 mx-auto my-14 sm:p-4 dark:text-gray-800">
                <h2 className="mb-5 mt-4 text-4xl font-bold leading-tight text-orange-500 eb-serif">All Art&craft Items List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-6 md:text-2xl text-xl text-center poppins"></th>
                                <th className="p-6 md:text-2xl text-xl text-center poppins">Item Name</th>
                                <th className="p-6 md:text-2xl text-xl text-center poppins">Subcategory Name</th>
                                <th className="p-6 md:text-2xl text-xl text-center poppins">Price</th>
                                <th className="p-6 md:text-2xl text-xl text-center poppins">Rating</th>
                                <th className="p-6 md:text-2xl text-xl text-center poppins">Customization</th>
                                <th className="p-6 md:text-2xl text-xl text-center poppins">Stock Status</th>
                                <th className="p-6 md:text-2xl text-xl text-center poppins">Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                items?.map((item, idx) => <tr key={item._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-5 text-xl">
                                        <p>{idx + 1}</p>
                                    </td>
                                    <td className="p-3 text-center md:text-lg">
                                        <p>{item?.item_name}</p>
                                    </td>
                                    <td className="p-3 text-center md:text-lg">
                                        <p>{item?.subCatOption}</p>
                                        
                                    </td>
                                    <td className="p-3 text-center md:text-lg">
                                        <p>${item?.price}</p>
                                        
                                    </td>
                                    <td className="p-3 text-center md:text-lg">
                                        <p>{item?.rating}</p>
                                    </td>
                                    <td className="p-3 text-center md:text-lg">
                                        <p>{item?.customOption}</p>
                                    </td>
                                    <td className="p-3 text-center md:text-lg">
                                        <p>{item?.stockOption}</p>
                                    </td>
                                    <td className="p-3 text-center md:text-lg">
                                        <span className=" py-1 font-semibold rounded-md  dark:text-orange-600">
                                            <Link to={`/items/${item._id}`}>View Details</Link>
                                        </span>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllCraftItem;