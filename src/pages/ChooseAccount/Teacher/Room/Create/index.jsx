import React from "react";
import { useEffect,useState } from "react";
import axios from "../../../../../base/axios";
import { Button} from "@mui/material";


const CreateRoom = () => {
    const [id,setId] = useState(localStorage.kahootApp_userId)
   
     useEffect(() => {
        console.log('id cretae',id)
        // handleCreateRoom()
    },[])
    const handleCreateRoom = async (e) => {
        try {
           const respone = await  axios.post(`/room/create/${id}`,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                    },
                
            )
            console.log(respone.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <> 
         <Button onClick={ handleCreateRoom}>Create Room</Button>
        </>
    )
}
export default CreateRoom