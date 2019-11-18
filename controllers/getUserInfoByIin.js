import getUserInfoByIinApi from '../api/getUserInfoByIin';

export default async (phone, iin) => {
  try {
    const userInfo = await getUserInfoByIinApi(phone, iin);
    return {
      fioAndClass: userInfo.data.response,
      iin: userInfo.data.iin
    };
  } catch (error) {
    throw error;
  }
};
