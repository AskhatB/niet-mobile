import getUserInfoByIinApi from '../api/getUserInfoByIin';

export default async (phone, iin) => {
  const userInfo = await getUserInfoByIinApi(phone, iin);
  return {
    fioAndClass: userInfo.data.response,
    iin: userInfo.data.iin
  };
};
