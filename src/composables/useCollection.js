import { ref } from "vue";

import { projectFileStore } from "../configs/firebase";
import { addDoc, collection } from "firebase/firestore";

const useCollection = name => {
  const error = ref(null);

  async function addRecord(record) {
    error.value = null;
    try {
      const res = await addDoc(collection(projectFileStore, name), record);
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  return { error, addRecord };
};
export default useCollection;
