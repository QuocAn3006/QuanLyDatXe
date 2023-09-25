import { projectAuth } from "../configs/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref } from "vue";

const provider = new GoogleAuthProvider();
const isLogin = ref(null);
async function signInWithGoogle() {
  isLogin.value = null;
  await signInWithPopup(projectAuth, provider)
    .then(result => {
      if (result.user.emailVerified) {
        return result;
      }
    })
    .catch(err => {
      isLogin.value = err;
    });
}

export function useSignInWithGoogle() {
  return { signInWithGoogle, isLogin };
}
