import { currency } from '@test-utils-release/data';

export function getAllCurrencyCodes() {
    return Object.keys(currency.CURRENCY_SYMBOLS);
}
