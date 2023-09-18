import { ref } from "vue";

import { projectAuth } from "../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

async function login(email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const res = await signInWithEmailAndPassword(projectAuth, email, password);
    return res.user;
  } catch (err) {
    if (err.code == "auth/wrong-password") {
      error.value = "Wrong password !! ";
    } else if (err.code == "auth/user-not-found") {
      error.value = "Email is invalid !! ";
    } else if (err.code == "auth/invalid-email") {
      error.value = "Email is invalid !! ";
    }
  } finally {
    isPending.value = false;
  }
}

export function useLogin() {
  return { error, login, isPending };
}
