import getPrePriceApi from '../api/getPrePrice';

export default async carNumberArray => {
  try {
    const priceData = await getPrePriceApi(carNumberArray);
    return {
      success: priceData.success
    };
  } catch (error) {
    throw error;
  }
};
