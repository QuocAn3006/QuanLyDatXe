import { ref } from "vue";

import { projectAuth } from "../configs/firebase";
import { signOut } from "firebase/auth";

const error = ref(null);

async function logOut() {
  error.value = null;
  try {
    const res = await signOut(projectAuth);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export function useLogout() {
  return { error, logOut };
}
