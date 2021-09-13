import { currency, CurrencyCodes } from '@test-utils-release/data';

/**
 * Возвращает знак валюты по ISO коду.
 *
 * @param currencyCode Код валюты.
 */
export const getCurrencySymbol = (currencyCode: CurrencyCodes): string =>
    currency.CURRENCY_SYMBOLS[currencyCode];
