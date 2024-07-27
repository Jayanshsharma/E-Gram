import dotenv from 'dotenv';

dotenv.config({});

class Config {
    MONGODB_URL;
    merchantId;
    publicKey;
    privateKey;


  constructor() {
    this.MONGODB_URL = process.env.MONGODB_URL || '1234';
    this.merchantId = process.env.merchantId || '1234';
    this.privateKey = process.env.publicKey || '';
    this.publicKey = process.env.privateKey || '';
  }
}

export const config = new Config();