import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrencyService } from './currency.service';

@ApiTags('currency')
@Controller('currency')
export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) {

    }

    @Get("exchangeCurrency")
    async exchangeCurrencyDefault() {
        return await this.currencyService.getGifByCurrency();
    }

    @Get("exchangeCurrency/:base/:symbols")
    async exchangeCurrency(@Param("base") base, @Param("symbols") symbols) {
        return await this.currencyService.getGifByCurrency(base, symbols);
    }
}
