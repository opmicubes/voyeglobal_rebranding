export const currencyConfigs = {
  USD: { code: 'USD', symbol: '$', decimalDigits: 2, symbolPosition: 'before' },
  AED: { code: 'AED', symbol: 'AED', decimalDigits: 2, symbolPosition: 'before' },
  INR: { code: 'INR', symbol: '₹', decimalDigits: 2, symbolPosition: 'before' },
  EUR: { code: 'EUR', symbol: '€', decimalDigits: 2, symbolPosition: 'before' },
  GBP: { code: 'GBP', symbol: '£', decimalDigits: 2, symbolPosition: 'before' },
};

/**
 * @param {{ amount: number, currencyCode: string }} money
 * @param {string} [locale]
 */
export function formatCurrency(money, locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: money.currencyCode,
    minimumFractionDigits: currencyConfigs[money.currencyCode]?.decimalDigits ?? 2,
    maximumFractionDigits: currencyConfigs[money.currencyCode]?.decimalDigits ?? 2,
  }).format(money.amount);
}
