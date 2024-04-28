import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CraftList from "../../components/CraftList/CraftList";



const MyCraftList = () => {
    const {user} = useContext(AuthContext);
    const [control,setControl] = useState(false)
    const [items,setItems] = useState([]);
    
    console.log(items);

    useEffect(()=> {
        fetch(`http://localhost:5000/myCraftList/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setItems(data);
        })
    },[user,control])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-8 my-10">
            {
                items?.map(item => <CraftList 
                    key={item.user_email}
                     item={item}
                     setControl={setControl}
                     >
                     </CraftList>)
            }
        </div>
    );
};

export default MyCraftList;