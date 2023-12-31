import { Response } from 'express';
import { logWithLabel } from '../../src/utils/console';
const apiError = async (res: Response, error: String) => {
  logWithLabel('error', `${error}`);
  return res.status(404).json({ message: 'The login failed in the api rest manager' });
};

export { apiError };
