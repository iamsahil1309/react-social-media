import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useLogin = () => {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const loginUser = useAuthStore((state) => state.login)

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "Please fill all the fields", error);
    }
    try {
      const userCredentials = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (userCredentials) {
        const docRef = doc(db, "users", userCredentials.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data())
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };
  return {loading, error, login}
};

export default useLogin;
