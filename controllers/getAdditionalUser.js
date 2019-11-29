import getAdditionalUserApi from '../api/getAdditionalUser';

export default async (iin, additionalIin) => {
  try {
    const userInfo = await getAdditionalUserApi(iin, additionalIin);
    return userInfo;
  } catch (error) {
    throw error;
  }
};
