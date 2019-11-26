import getCarByNumberApi from '../api/getCarByNumber';

export default async carNumber => {
  try {
    const carInfo = await getCarByNumberApi(carNumber);
    if (typeof carInfo.data === 'string') {
      throw 'Неверный формат или номер не существует';
    } else {
      const { MARK, MODEL, NYEAR, REGION_ID, VIN } = carInfo.data.data.Vehicle;
      return {
        model: `${MARK} ${MODEL} ${NYEAR}`,
        region: REGION_ID,
        vin: VIN
      };
    }
  } catch (error) {
    throw error;
  }
};
