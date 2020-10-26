import { v4 as uuidv4 } from "uuid";

export const getIdImage = () => {
  return `uploading-image__${uuidv4()}`
}
