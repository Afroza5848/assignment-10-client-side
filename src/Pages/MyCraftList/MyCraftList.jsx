import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CraftList from "../../components/CraftList/CraftList";



const MyCraftList = () => {
    const { user } = useContext(AuthContext);
    const [control, setControl] = useState(false)
    const [items, setItems] = useState([]);
    const [filterCustomization,setFilterCustomization] = useState([])

    console.log(filterCustomization);
    const handleCustomization = filter => {
        if(filter === "Yes"){
            const customYes = items.filter(custom => custom.customOption === "Yes");
            setFilterCustomization(customYes);
        }
        else if(filter === "No"){
            const customNo = items.filter(custom => custom.customOption === "No");
            setFilterCustomization(customNo);
        }
    }

    useEffect(() => {
        fetch(`https://jute-and-timber-zone-server.vercel.app/myCraftList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
                setFilterCustomization(data)
            })
    }, [user, control])

    return (
        <div className="container mx-auto">
            <details className="dropdown my-5 w-64 mx-auto">
                <summary className="m-1 btn bg-orange-500 text-white text-xl">Filter By Customization</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleCustomization("Yes")}><a>Yes</a></li>
                    <li onClick={() => handleCustomization("No")}><a>No</a></li>
                </ul>
            </details>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 my-10">

                {
                    filterCustomization?.map(item => <CraftList
                        key={item._id}
                        item={item}
                        setControl={setControl}
                    >
                    </CraftList>)
                }
            </div>
        </div>
    );
};

export default MyCraftList;