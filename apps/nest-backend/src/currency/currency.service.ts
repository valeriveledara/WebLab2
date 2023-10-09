import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Currency } from './schemas/currency.schema';
import { Model } from 'mongoose';
import { CreateCurrencyDto } from './dto/create-currency.dto';

@Injectable()
export class CurrencyService {
    constructor(@InjectModel(Currency.name) private currencyModel: Model<Currency>) {

    }

    async getGifByCurrency(base = `${process.env.CURRENCY_BASE}`,
    symbols = `${process.env.CURRENCY_SYMBOLS}`) {
        const todayCurrency = await this.getCurrency("2023-10-05", base, symbols);
        const yesterdayCurrency = await this.getCurrency("2023-10-04", base, symbols);
        let gif;
        if(todayCurrency > yesterdayCurrency) {
            gif = await this.getGif("rich");
        }
        else {
            gif = await this.getGif("broke");
        }
        return gif;
    }

    async getCurrency(date: string, base: string, symbols: string) {
        const response = await axios.get(
            `${process.env.CURRENCY_URL}` + date + `.json?` +
            `app_id=${process.env.CURRENCY_APP_ID}&` +
            `base=${base}&` +
            `symbols=${symbols}`);
        const rate: number = response.data.rates[symbols];
        console.log(date + " Base = " + base + "; target = " + symbols + "; rate: " + rate);
        this.saveCurrency(
            `${base}`,
            `${symbols}`,
            rate, date);
        return rate;
    }

    async getGif(tag: string) {
        const response = await axios.get(
            `${process.env.GITHY_URL}?` +
            `api_key=${process.env.GITHY_API_KEY}&q=` + tag);
        const rand = Math.floor((Math.random() * 50));
        const url: string = response.data.data[rand].images.original.url;
        console.log("Giph with tag = " + tag + ": " + url);
        return url;
    }

    async saveCurrency(base, target, rate, date) {
        const createCurrencyDto = new CreateCurrencyDto();
        createCurrencyDto.base=base;
        createCurrencyDto.target=target;
        createCurrencyDto.values=rate;
        createCurrencyDto.date=date;
        const currency = new this.currencyModel(createCurrencyDto);
        return currency.save();
    }

}
