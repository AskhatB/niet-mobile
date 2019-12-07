import getPrePriceApi from '../api/getPrePrice';

export default async (carNumberArray, iin) => {
  try {
    const priceData = await getPrePriceApi(carNumberArray, iin);
    return {
      success: priceData.success
    };
  } catch (error) {
    throw error;
  }
};
