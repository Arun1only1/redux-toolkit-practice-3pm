import { v4 as uuidv4 } from "uuid";

export const getRandomId = () => {
  const randomId = uuidv4();

  return randomId;
};
