/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class RateService {
  private readonly exchangeRateApi = 'https://v6.exchangerate-api.com/v6/d61fd4b66321f69339e29612/latest/USD';

  async getExchangeRate(): Promise<any> {
    const response = await fetch(this.exchangeRateApi);
    if (!response.ok) {
      throw new Error('Failed to fetch api exchange rate');
    }
    return response.json();
  }
}
