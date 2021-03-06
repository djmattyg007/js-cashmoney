/// <reference path="../src/alsatian-ambient.d.ts" />
import { TestFixture, Test, Expect } from "alsatian";

import Currency from "src/currency";

@TestFixture("Currency")
export default class CurrencyTest {
    @Test("it converts to JSON")
    public itConvertsToJson() {
        const currency = new Currency("USD");
        Expect(JSON.stringify(currency)).toBe('"USD"');
        Expect(currency.toJSON()).toBe("USD");
    }
}
