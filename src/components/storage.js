import { app } from "../firebase-config";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);

export const getArtistUrl = async (image) => {
  const storageRef = ref(storage, `artist/${image}`);
  const url = await getDownloadURL(storageRef);
  return url;
};

export const getPaintUrl = async (image) => {
  const storageRef = ref(storage, `paint/${image}`);
  const url = await getDownloadURL(storageRef);
  return url;
};
