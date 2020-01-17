import { RoundingMode as Mode } from "../../src/rounding";

export const ceilExamples = [
    [1.2, '2'],
    [-1.2, '-1'],
    [2.00, '2'],
];

export const floorExamples = [
    [2.7, '2'],
    [-2.7, '-3'],
    [2.00, '2'],
];

export const roundExamples = [
    [2.6, Mode.ROUND_HALF_EVEN, '3'],
    [2.5, Mode.ROUND_HALF_EVEN, '2'],
    [3.5, Mode.ROUND_HALF_EVEN, '4'],
    [-2.6, Mode.ROUND_HALF_EVEN, '-3'],
    [-2.5, Mode.ROUND_HALF_EVEN, '-2'],
    [-3.5, Mode.ROUND_HALF_EVEN, '-4'],
    [2.1, Mode.ROUND_HALF_ODD, '2'],
    [2.5, Mode.ROUND_HALF_ODD, '3'],
    [3.5, Mode.ROUND_HALF_ODD, '3'],
    [-2.1, Mode.ROUND_HALF_ODD, '-2'],
    [-2.5, Mode.ROUND_HALF_ODD, '-3'],
    [-3.5, Mode.ROUND_HALF_ODD, '-3'],
    [2, Mode.ROUND_HALF_EVEN, '2'],
    [2, Mode.ROUND_HALF_ODD, '2'],
    [-2, Mode.ROUND_HALF_ODD, '-2'],
    [2.2, Mode.ROUND_HALF_DOWN, '2'],
    [2.5, Mode.ROUND_HALF_DOWN, '2'],
    [2.6, Mode.ROUND_HALF_DOWN, '3'],
    [-2.3, Mode.ROUND_HALF_DOWN, '-2'],
    [-2.5, Mode.ROUND_HALF_DOWN, '-2'],
    [-2.6, Mode.ROUND_HALF_DOWN, '-3'],
    [2.2, Mode.ROUND_HALF_UP, '2'],
    [2.5, Mode.ROUND_HALF_UP, '3'],
    [2.8, Mode.ROUND_HALF_UP, '3'],
    [2, Mode.ROUND_HALF_UP, '2'],
    [-2.7, Mode.ROUND_HALF_UP, '-3'],
    [-2.5, Mode.ROUND_HALF_UP, '-3'],
    [-2.2, Mode.ROUND_HALF_UP, '-2'],
    [-2, Mode.ROUND_HALF_UP, '-2'],
    [2, Mode.ROUND_HALF_DOWN, '2'],
    ['12.50', Mode.ROUND_HALF_DOWN, '12'],
    ['-12.50', Mode.ROUND_HALF_DOWN, '-12'],
    [-1.5, Mode.ROUND_HALF_UP, '-2'],
    [-8328.578947368, Mode.ROUND_HALF_UP, '-8329'],
    [-8328.5, Mode.ROUND_HALF_UP, '-8329'],
    [-8328.5, Mode.ROUND_HALF_DOWN, '-8328'],
    [2.5, Mode.ROUND_HALF_POSITIVE_INFINITY, '3'],
    [2.6, Mode.ROUND_HALF_POSITIVE_INFINITY, '3'],
    [-2.5, Mode.ROUND_HALF_POSITIVE_INFINITY, '-2'],
    [-2.6, Mode.ROUND_HALF_POSITIVE_INFINITY, '-3'],
    [2, Mode.ROUND_HALF_POSITIVE_INFINITY, '2'],
    ['12.50', Mode.ROUND_HALF_POSITIVE_INFINITY, '13'],
    ['-12.50', Mode.ROUND_HALF_POSITIVE_INFINITY, '-12'],
    [-8328.5, Mode.ROUND_HALF_POSITIVE_INFINITY, '-8328'],
    [2.2, Mode.ROUND_HALF_NEGATIVE_INFINITY, '2'],
    [2.5, Mode.ROUND_HALF_NEGATIVE_INFINITY, '2'],
    [2, Mode.ROUND_HALF_NEGATIVE_INFINITY, '2'],
    [-2.5, Mode.ROUND_HALF_NEGATIVE_INFINITY, '-3'],
    [-2, Mode.ROUND_HALF_NEGATIVE_INFINITY, '-2'],
    [-1.5, Mode.ROUND_HALF_NEGATIVE_INFINITY, '-2'],
];
