// IMPORTANT:
// This file is autogenerated by generate-money-factories.ts
// DO NOT modify directly as your changes will be overwritten

import type { numeric } from "@cashmoney/number";
import PreciseMoney from "./precisemoney";
import Currency from "./currency";

function moneyFactory(amount: numeric, currencyCode: string): PreciseMoney {
    return new PreciseMoney(amount, new Currency(currencyCode));
}

export const AED = (amount: numeric) => moneyFactory(amount, 'AED'); // UAE Dirham
export const AFN = (amount: numeric) => moneyFactory(amount, 'AFN'); // Afghani
export const ALL = (amount: numeric) => moneyFactory(amount, 'ALL'); // Lek
export const AMD = (amount: numeric) => moneyFactory(amount, 'AMD'); // Armenian Dram
export const ANG = (amount: numeric) => moneyFactory(amount, 'ANG'); // Netherlands Antillean Guilder
export const AOA = (amount: numeric) => moneyFactory(amount, 'AOA'); // Kwanza
export const ARS = (amount: numeric) => moneyFactory(amount, 'ARS'); // Argentine Peso
export const AUD = (amount: numeric) => moneyFactory(amount, 'AUD'); // Australian Dollar
export const AWG = (amount: numeric) => moneyFactory(amount, 'AWG'); // Aruban Florin
export const AZN = (amount: numeric) => moneyFactory(amount, 'AZN'); // Azerbaijan Manat
export const BAM = (amount: numeric) => moneyFactory(amount, 'BAM'); // Convertible Mark
export const BBD = (amount: numeric) => moneyFactory(amount, 'BBD'); // Barbados Dollar
export const BDT = (amount: numeric) => moneyFactory(amount, 'BDT'); // Taka
export const BGN = (amount: numeric) => moneyFactory(amount, 'BGN'); // Bulgarian Lev
export const BHD = (amount: numeric) => moneyFactory(amount, 'BHD'); // Bahraini Dinar
export const BIF = (amount: numeric) => moneyFactory(amount, 'BIF'); // Burundi Franc
export const BMD = (amount: numeric) => moneyFactory(amount, 'BMD'); // Bermudian Dollar
export const BND = (amount: numeric) => moneyFactory(amount, 'BND'); // Brunei Dollar
export const BOB = (amount: numeric) => moneyFactory(amount, 'BOB'); // Boliviano
export const BOV = (amount: numeric) => moneyFactory(amount, 'BOV'); // Mvdol
export const BRL = (amount: numeric) => moneyFactory(amount, 'BRL'); // Brazilian Real
export const BSD = (amount: numeric) => moneyFactory(amount, 'BSD'); // Bahamian Dollar
export const BTN = (amount: numeric) => moneyFactory(amount, 'BTN'); // Ngultrum
export const BWP = (amount: numeric) => moneyFactory(amount, 'BWP'); // Pula
export const BYN = (amount: numeric) => moneyFactory(amount, 'BYN'); // Belarusian Ruble
export const BZD = (amount: numeric) => moneyFactory(amount, 'BZD'); // Belize Dollar
export const CAD = (amount: numeric) => moneyFactory(amount, 'CAD'); // Canadian Dollar
export const CDF = (amount: numeric) => moneyFactory(amount, 'CDF'); // Congolese Franc
export const CHE = (amount: numeric) => moneyFactory(amount, 'CHE'); // WIR Euro
export const CHF = (amount: numeric) => moneyFactory(amount, 'CHF'); // Swiss Franc
export const CHW = (amount: numeric) => moneyFactory(amount, 'CHW'); // WIR Franc
export const CLF = (amount: numeric) => moneyFactory(amount, 'CLF'); // Unidad de Fomento
export const CLP = (amount: numeric) => moneyFactory(amount, 'CLP'); // Chilean Peso
export const CNY = (amount: numeric) => moneyFactory(amount, 'CNY'); // Yuan Renminbi
export const COP = (amount: numeric) => moneyFactory(amount, 'COP'); // Colombian Peso
export const COU = (amount: numeric) => moneyFactory(amount, 'COU'); // Unidad de Valor Real
export const CRC = (amount: numeric) => moneyFactory(amount, 'CRC'); // Costa Rican Colon
export const CUC = (amount: numeric) => moneyFactory(amount, 'CUC'); // Peso Convertible
export const CUP = (amount: numeric) => moneyFactory(amount, 'CUP'); // Cuban Peso
export const CVE = (amount: numeric) => moneyFactory(amount, 'CVE'); // Cabo Verde Escudo
export const CZK = (amount: numeric) => moneyFactory(amount, 'CZK'); // Czech Koruna
export const DJF = (amount: numeric) => moneyFactory(amount, 'DJF'); // Djibouti Franc
export const DKK = (amount: numeric) => moneyFactory(amount, 'DKK'); // Danish Krone
export const DOP = (amount: numeric) => moneyFactory(amount, 'DOP'); // Dominican Peso
export const DZD = (amount: numeric) => moneyFactory(amount, 'DZD'); // Algerian Dinar
export const EGP = (amount: numeric) => moneyFactory(amount, 'EGP'); // Egyptian Pound
export const ERN = (amount: numeric) => moneyFactory(amount, 'ERN'); // Nakfa
export const ETB = (amount: numeric) => moneyFactory(amount, 'ETB'); // Ethiopian Birr
export const EUR = (amount: numeric) => moneyFactory(amount, 'EUR'); // Euro
export const FJD = (amount: numeric) => moneyFactory(amount, 'FJD'); // Fiji Dollar
export const FKP = (amount: numeric) => moneyFactory(amount, 'FKP'); // Falkland Islands Pound
export const GBP = (amount: numeric) => moneyFactory(amount, 'GBP'); // Pound Sterling
export const GEL = (amount: numeric) => moneyFactory(amount, 'GEL'); // Lari
export const GHS = (amount: numeric) => moneyFactory(amount, 'GHS'); // Ghana Cedi
export const GIP = (amount: numeric) => moneyFactory(amount, 'GIP'); // Gibraltar Pound
export const GMD = (amount: numeric) => moneyFactory(amount, 'GMD'); // Dalasi
export const GNF = (amount: numeric) => moneyFactory(amount, 'GNF'); // Guinean Franc
export const GTQ = (amount: numeric) => moneyFactory(amount, 'GTQ'); // Quetzal
export const GYD = (amount: numeric) => moneyFactory(amount, 'GYD'); // Guyana Dollar
export const HKD = (amount: numeric) => moneyFactory(amount, 'HKD'); // Hong Kong Dollar
export const HNL = (amount: numeric) => moneyFactory(amount, 'HNL'); // Lempira
export const HRK = (amount: numeric) => moneyFactory(amount, 'HRK'); // Kuna
export const HTG = (amount: numeric) => moneyFactory(amount, 'HTG'); // Gourde
export const HUF = (amount: numeric) => moneyFactory(amount, 'HUF'); // Forint
export const IDR = (amount: numeric) => moneyFactory(amount, 'IDR'); // Rupiah
export const ILS = (amount: numeric) => moneyFactory(amount, 'ILS'); // New Israeli Sheqel
export const INR = (amount: numeric) => moneyFactory(amount, 'INR'); // Indian Rupee
export const IQD = (amount: numeric) => moneyFactory(amount, 'IQD'); // Iraqi Dinar
export const IRR = (amount: numeric) => moneyFactory(amount, 'IRR'); // Iranian Rial
export const ISK = (amount: numeric) => moneyFactory(amount, 'ISK'); // Iceland Krona
export const JMD = (amount: numeric) => moneyFactory(amount, 'JMD'); // Jamaican Dollar
export const JOD = (amount: numeric) => moneyFactory(amount, 'JOD'); // Jordanian Dinar
export const JPY = (amount: numeric) => moneyFactory(amount, 'JPY'); // Yen
export const KES = (amount: numeric) => moneyFactory(amount, 'KES'); // Kenyan Shilling
export const KGS = (amount: numeric) => moneyFactory(amount, 'KGS'); // Som
export const KHR = (amount: numeric) => moneyFactory(amount, 'KHR'); // Riel
export const KMF = (amount: numeric) => moneyFactory(amount, 'KMF'); // Comorian Franc
export const KPW = (amount: numeric) => moneyFactory(amount, 'KPW'); // North Korean Won
export const KRW = (amount: numeric) => moneyFactory(amount, 'KRW'); // Won
export const KWD = (amount: numeric) => moneyFactory(amount, 'KWD'); // Kuwaiti Dinar
export const KYD = (amount: numeric) => moneyFactory(amount, 'KYD'); // Cayman Islands Dollar
export const KZT = (amount: numeric) => moneyFactory(amount, 'KZT'); // Tenge
export const LAK = (amount: numeric) => moneyFactory(amount, 'LAK'); // Lao Kip
export const LBP = (amount: numeric) => moneyFactory(amount, 'LBP'); // Lebanese Pound
export const LKR = (amount: numeric) => moneyFactory(amount, 'LKR'); // Sri Lanka Rupee
export const LRD = (amount: numeric) => moneyFactory(amount, 'LRD'); // Liberian Dollar
export const LSL = (amount: numeric) => moneyFactory(amount, 'LSL'); // Loti
export const LYD = (amount: numeric) => moneyFactory(amount, 'LYD'); // Libyan Dinar
export const MAD = (amount: numeric) => moneyFactory(amount, 'MAD'); // Moroccan Dirham
export const MDL = (amount: numeric) => moneyFactory(amount, 'MDL'); // Moldovan Leu
export const MGA = (amount: numeric) => moneyFactory(amount, 'MGA'); // Malagasy Ariary
export const MKD = (amount: numeric) => moneyFactory(amount, 'MKD'); // Denar
export const MMK = (amount: numeric) => moneyFactory(amount, 'MMK'); // Kyat
export const MNT = (amount: numeric) => moneyFactory(amount, 'MNT'); // Tugrik
export const MOP = (amount: numeric) => moneyFactory(amount, 'MOP'); // Pataca
export const MRU = (amount: numeric) => moneyFactory(amount, 'MRU'); // Ouguiya
export const MUR = (amount: numeric) => moneyFactory(amount, 'MUR'); // Mauritius Rupee
export const MVR = (amount: numeric) => moneyFactory(amount, 'MVR'); // Rufiyaa
export const MWK = (amount: numeric) => moneyFactory(amount, 'MWK'); // Malawi Kwacha
export const MXN = (amount: numeric) => moneyFactory(amount, 'MXN'); // Mexican Peso
export const MXV = (amount: numeric) => moneyFactory(amount, 'MXV'); // Mexican Unidad de Inversion (UDI)
export const MYR = (amount: numeric) => moneyFactory(amount, 'MYR'); // Malaysian Ringgit
export const MZN = (amount: numeric) => moneyFactory(amount, 'MZN'); // Mozambique Metical
export const NAD = (amount: numeric) => moneyFactory(amount, 'NAD'); // Namibia Dollar
export const NGN = (amount: numeric) => moneyFactory(amount, 'NGN'); // Naira
export const NIO = (amount: numeric) => moneyFactory(amount, 'NIO'); // Cordoba Oro
export const NOK = (amount: numeric) => moneyFactory(amount, 'NOK'); // Norwegian Krone
export const NPR = (amount: numeric) => moneyFactory(amount, 'NPR'); // Nepalese Rupee
export const NZD = (amount: numeric) => moneyFactory(amount, 'NZD'); // New Zealand Dollar
export const OMR = (amount: numeric) => moneyFactory(amount, 'OMR'); // Rial Omani
export const PAB = (amount: numeric) => moneyFactory(amount, 'PAB'); // Balboa
export const PEN = (amount: numeric) => moneyFactory(amount, 'PEN'); // Sol
export const PGK = (amount: numeric) => moneyFactory(amount, 'PGK'); // Kina
export const PHP = (amount: numeric) => moneyFactory(amount, 'PHP'); // Philippine Peso
export const PKR = (amount: numeric) => moneyFactory(amount, 'PKR'); // Pakistan Rupee
export const PLN = (amount: numeric) => moneyFactory(amount, 'PLN'); // Zloty
export const PYG = (amount: numeric) => moneyFactory(amount, 'PYG'); // Guarani
export const QAR = (amount: numeric) => moneyFactory(amount, 'QAR'); // Qatari Rial
export const RON = (amount: numeric) => moneyFactory(amount, 'RON'); // Romanian Leu
export const RSD = (amount: numeric) => moneyFactory(amount, 'RSD'); // Serbian Dinar
export const RUB = (amount: numeric) => moneyFactory(amount, 'RUB'); // Russian Ruble
export const RWF = (amount: numeric) => moneyFactory(amount, 'RWF'); // Rwanda Franc
export const SAR = (amount: numeric) => moneyFactory(amount, 'SAR'); // Saudi Riyal
export const SBD = (amount: numeric) => moneyFactory(amount, 'SBD'); // Solomon Islands Dollar
export const SCR = (amount: numeric) => moneyFactory(amount, 'SCR'); // Seychelles Rupee
export const SDG = (amount: numeric) => moneyFactory(amount, 'SDG'); // Sudanese Pound
export const SEK = (amount: numeric) => moneyFactory(amount, 'SEK'); // Swedish Krona
export const SGD = (amount: numeric) => moneyFactory(amount, 'SGD'); // Singapore Dollar
export const SHP = (amount: numeric) => moneyFactory(amount, 'SHP'); // Saint Helena Pound
export const SLL = (amount: numeric) => moneyFactory(amount, 'SLL'); // Leone
export const SOS = (amount: numeric) => moneyFactory(amount, 'SOS'); // Somali Shilling
export const SRD = (amount: numeric) => moneyFactory(amount, 'SRD'); // Surinam Dollar
export const SSP = (amount: numeric) => moneyFactory(amount, 'SSP'); // South Sudanese Pound
export const STN = (amount: numeric) => moneyFactory(amount, 'STN'); // Dobra
export const SVC = (amount: numeric) => moneyFactory(amount, 'SVC'); // El Salvador Colon
export const SYP = (amount: numeric) => moneyFactory(amount, 'SYP'); // Syrian Pound
export const SZL = (amount: numeric) => moneyFactory(amount, 'SZL'); // Lilangeni
export const THB = (amount: numeric) => moneyFactory(amount, 'THB'); // Baht
export const TJS = (amount: numeric) => moneyFactory(amount, 'TJS'); // Somoni
export const TMT = (amount: numeric) => moneyFactory(amount, 'TMT'); // Turkmenistan New Manat
export const TND = (amount: numeric) => moneyFactory(amount, 'TND'); // Tunisian Dinar
export const TOP = (amount: numeric) => moneyFactory(amount, 'TOP'); // Pa’anga
export const TRY = (amount: numeric) => moneyFactory(amount, 'TRY'); // Turkish Lira
export const TTD = (amount: numeric) => moneyFactory(amount, 'TTD'); // Trinidad and Tobago Dollar
export const TWD = (amount: numeric) => moneyFactory(amount, 'TWD'); // New Taiwan Dollar
export const TZS = (amount: numeric) => moneyFactory(amount, 'TZS'); // Tanzanian Shilling
export const UAH = (amount: numeric) => moneyFactory(amount, 'UAH'); // Hryvnia
export const UGX = (amount: numeric) => moneyFactory(amount, 'UGX'); // Uganda Shilling
export const USD = (amount: numeric) => moneyFactory(amount, 'USD'); // US Dollar
export const USN = (amount: numeric) => moneyFactory(amount, 'USN'); // US Dollar (Next day)
export const UYI = (amount: numeric) => moneyFactory(amount, 'UYI'); // Uruguay Peso en Unidades Indexadas (UI)
export const UYU = (amount: numeric) => moneyFactory(amount, 'UYU'); // Peso Uruguayo
export const UYW = (amount: numeric) => moneyFactory(amount, 'UYW'); // Unidad Previsional
export const UZS = (amount: numeric) => moneyFactory(amount, 'UZS'); // Uzbekistan Sum
export const VES = (amount: numeric) => moneyFactory(amount, 'VES'); // Bolívar Soberano
export const VND = (amount: numeric) => moneyFactory(amount, 'VND'); // Dong
export const VUV = (amount: numeric) => moneyFactory(amount, 'VUV'); // Vatu
export const WST = (amount: numeric) => moneyFactory(amount, 'WST'); // Tala
export const XAF = (amount: numeric) => moneyFactory(amount, 'XAF'); // CFA Franc BEAC
export const XAG = (amount: numeric) => moneyFactory(amount, 'XAG'); // Silver
export const XAU = (amount: numeric) => moneyFactory(amount, 'XAU'); // Gold
export const XBA = (amount: numeric) => moneyFactory(amount, 'XBA'); // Bond Markets Unit European Composite Unit (EURCO)
export const XBB = (amount: numeric) => moneyFactory(amount, 'XBB'); // Bond Markets Unit European Monetary Unit (E.M.U.-6)
export const XBC = (amount: numeric) => moneyFactory(amount, 'XBC'); // Bond Markets Unit European Unit of Account 9 (E.U.A.-9)
export const XBD = (amount: numeric) => moneyFactory(amount, 'XBD'); // Bond Markets Unit European Unit of Account 17 (E.U.A.-17)
export const XBT = (amount: numeric) => moneyFactory(amount, 'XBT'); // Bitcoin
export const XCD = (amount: numeric) => moneyFactory(amount, 'XCD'); // East Caribbean Dollar
export const XDR = (amount: numeric) => moneyFactory(amount, 'XDR'); // SDR (Special Drawing Right)
export const XOF = (amount: numeric) => moneyFactory(amount, 'XOF'); // CFA Franc BCEAO
export const XPD = (amount: numeric) => moneyFactory(amount, 'XPD'); // Palladium
export const XPF = (amount: numeric) => moneyFactory(amount, 'XPF'); // CFP Franc
export const XPT = (amount: numeric) => moneyFactory(amount, 'XPT'); // Platinum
export const XSU = (amount: numeric) => moneyFactory(amount, 'XSU'); // Sucre
export const XTS = (amount: numeric) => moneyFactory(amount, 'XTS'); // Codes specifically reserved for testing purposes
export const XUA = (amount: numeric) => moneyFactory(amount, 'XUA'); // ADB Unit of Account
export const XXX = (amount: numeric) => moneyFactory(amount, 'XXX'); // The codes assigned for transactions where no currency is involved
export const YER = (amount: numeric) => moneyFactory(amount, 'YER'); // Yemeni Rial
export const ZAR = (amount: numeric) => moneyFactory(amount, 'ZAR'); // Rand
export const ZMW = (amount: numeric) => moneyFactory(amount, 'ZMW'); // Zambian Kwacha
export const ZWL = (amount: numeric) => moneyFactory(amount, 'ZWL'); // Zimbabwe Dollar
