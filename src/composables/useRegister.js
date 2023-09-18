import { projectAuth } from "../configs/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  AuthErrorCodes
} from "firebase/auth";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

async function register(fullname, email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const res = await createUserWithEmailAndPassword(
      projectAuth,

      email,
      password
    );
    if (!res) throw new Error("couldn't create new user");
    updateProfile(res.user, { displayName: fullname });
    return res.user;
  } catch (err) {
    if (err.code == AuthErrorCodes.EMAIL_EXISTS) {
      error.value = "The email address is already in use by another account";
    }
  } finally {
    isPending.value = false;
  }
}

export function useRegister() {
  return { register, error, isPending };
}
