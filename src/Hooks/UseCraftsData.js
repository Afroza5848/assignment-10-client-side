import { useEffect, useState } from "react";

const UseCraftsData = () => {
    //const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://jute-and-timber-zone-server.vercel.app/items')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    // useEffect(() => {
    //     if (items) {
    //         setLoading(false);
    //     }
    //     setLoading(true)
    // }, [items])

    // if (loading) {
    //     return <div className='flex justify-center mt-10'><span className="loading loading-bars loading-lg text-orange-600 "></span></div>
    // }

    return { items };



};

export default UseCraftsData;