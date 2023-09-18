import { ref } from "vue";

import { projectAuth } from "../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(projectAuth.currentUser);

onAuthStateChanged(projectAuth, function (_user) {
  if (_user) user.value = _user;
});

function getUser() {
  return { user };
}

export function useUser() {
  return { getUser };
}
