import { useState } from "react"
import useShowToast from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"


const useSearchUser = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const showToast = useShowToast()

    const getUserProfile = async(username) => {
        try {
            const q = query(collection(db, "users"), where("username", "==", username))
            const querySnapshot = await getDocs(q)

            if(querySnapshot.empty) return showToast("Error", "User not found", "error")

            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            })
        } catch (error) {
            showToast("Error", error.message, "error")
        }finally{
            setIsLoading(false)
        }
    }
    return {isLoading, getUserProfile, user}
}

export default useSearchUser 