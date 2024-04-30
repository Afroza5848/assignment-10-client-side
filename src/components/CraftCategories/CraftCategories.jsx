import { GiPriceTag } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";


const CraftCategories = () => {
    const categories = useLoaderData();
    console.log(categories);

    return (
        <div className="container mx-auto mt-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl eb-serif text-orange-500 font-bold">Art & Craft Categories</h2>
                <p>It is hard to please all your customers but you can increase customer satisfaction and decrease returns by including a complete product description for every item you sell.</p>
            </div>
            <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-10">
                {
                    categories?.map(category => <Link to={`/selectedCat/${category.subcategory_Name}`} key={category._id}>
                        <div  className=" p-6  border border-gray-200 dark:text-gray-900">
                            <img src={category.image} alt="" className="object-cover object-center w-full  h-72 dark:bg-gray-500" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium  dark:text-violet-600">{category.item_name}</span>
                                <h2 className="text-2xl font-semibold text-orange-600 flex items-center gap-2"><GiPriceTag className="text-gray-800 " />{category.subcategory_Name}</h2>
                            </div>
                            {/* <p className="dark:text-gray-800">{category.short_description}</p> */}
                        </div>
                    </Link>)
                }

            </div>
        </div>
    );
};

export default CraftCategories;