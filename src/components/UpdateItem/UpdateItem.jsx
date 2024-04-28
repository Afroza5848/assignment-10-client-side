import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
    const item = useLoaderData();
    console.log('update',item);
    return (
        <div>
            
        </div>
    );
};

export default UpdateItem;