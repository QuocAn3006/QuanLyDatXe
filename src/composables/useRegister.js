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

    updateProfile(res.user, { displayName: fullname });
    return res.user;
  } catch (err) {
    if (err.code == AuthErrorCodes.EMAIL_EXISTS) {
      error.value = "Email is already used";
    } else if (err.code == AuthErrorCodes.WEAK_PASSWORD) {
      error.value = "Password should be at least 6 characters";
    } else if (err.code == AuthErrorCodes.INVALID_EMAIL) {
      error.value = "Email is invalid";
    } else if (err.code == AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
      error.value = "Please Refresh and Try Again";
    }
  } finally {
    isPending.value = false;
  }
}

export function useRegister() {
  return { register, error, isPending };
}
