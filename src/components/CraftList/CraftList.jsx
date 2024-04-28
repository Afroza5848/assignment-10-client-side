

import PropTypes from 'prop-types';
import { useState } from 'react';
import { GiPriceTag } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CraftList = ({ item,setControl,control }) => {
    const { _id, item_name, massage, photo, price, rating, customOption, stockOption, user_name, user_email } = item;
    
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/items/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            setControl(!control);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
                                icon: "success"
                            });
                          
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="rounded-md shadow-md h-full dark:bg-gray-50  dark:text-gray-800">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-2">
                        <img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{user_name}</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-600">{user_email}</span>
                        </div>
                    </div>
                    <button title="Open options" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                        </svg>
                    </button>
                </div>
                <img src={photo} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                <div className="p-3 space-y-3">

                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-2xl poppins font-bold dark:text-gray-800 flex items-center gap-2"><GiPriceTag className="text-orange-600" />{item_name}</h3>
                    </a>
                    <p>{massage.slice(0, 100)}...</p>
                    <div>
                        <h2 className="text-lg font-semibold poppins text-gray-600 flex items-center gap-1">Price : <span className="font-normal monts ml-2"> ${price}</span></h2>
                    </div>
                    <div className="flex items-center gap-3">

                        <h2 className="text-lg font-semibold poppins flex text-gray-600 items-center gap-1">Rating : <span className="font-normal monts ml-2"> {rating}</span></h2>

                    </div>

                    <div>
                        <h2 className="text-lg font-semibold poppins text-gray-600 flex items-center gap-1">Customization : <span className="font-normal monts ml-2"> {customOption}</span></h2>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold poppins text-gray-600 flex items-center gap-1">Stock Stutas : <span className="font-normal monts ml-2"> {stockOption}</span></h2>
                    </div>
                    <div className='space-x-3'>
                        <Link to={`/updateItem/${_id}`}>
                            <button className='bg-orange-500 text-white px-3 py-2 rounded font-semibold poppins'>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className='bg-orange-500 text-white px-3 py-2 rounded font-semibold poppins'>Delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

CraftList.propTypes = {
    item: PropTypes.object,
    control:PropTypes.bool,
    setControl:PropTypes.func
   
};

export default CraftList;