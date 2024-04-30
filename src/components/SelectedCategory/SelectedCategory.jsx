import { Link, useParams } from "react-router-dom";
import UseCraftsData from "../../Hooks/UseCraftsData";
import { GiPriceTag } from "react-icons/gi";
import { useEffect, useState } from "react";




const SelectedCategory = () => {
    const [loading, setLoading] = useState(true)
    const { items } = UseCraftsData();
    const { subcategory_Name } = useParams();
    console.log(subcategory_Name);
    console.log(items);
    const filterData = items.filter(item => item.subCatOption.trim() == subcategory_Name.trim());
    console.log(filterData); 
    useEffect(() => {
        if (!items) {
            setLoading(true);
        }
        setLoading(false)
    }, [items])

        
    if (loading) {
        return <div className='flex justify-center mt-10'><span className="loading loading-bars loading-lg text-orange-600 "></span></div>
    }
   
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto my-14 gap-8">
            {
                filterData.map(data => <div key={data._id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={data.photo} alt="" />
                    </a>
                    <div className="p-5 space-x-3">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2"><GiPriceTag className="text-orange-600 " />{data.subCatOption}</h5>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-2xl eb-serif font-bold dark:text-gray-100">{data.item_name}</h3>
                        </a>
                        <div className="flex items-center gap-3">

                            <h2 className="text-xl font-semibold poppins flex text-gray-100 items-center gap-1">Rating : <span className="font-normal monts ml-2"> {data.rating}</span></h2>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.massage}</p>
                        <div>


                        </div>
                        <Link to={`/items/${data._id}`} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                            View Details
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SelectedCategory;