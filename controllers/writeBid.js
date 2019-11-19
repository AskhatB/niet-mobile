import writeBidApi from '../api/writeBid';

export default async data => {
  try {
    const bidWrited = await writeBidApi(data);
    return bidWrited;
  } catch (error) {
    throw error;
  }
};
