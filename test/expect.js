/**
 * MIT License
 *
 * Copyright (c) 2021 Iván Szkiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// modified version https://jslib.k6.io/expect/0.0.5/index.js

import { check, group } from "k6";
import { Rate } from "k6/metrics";

export let errors = new Rate("errors");
export let options = { thresholds: { errors: ["rate==0"] } };

export class FunkBrokenChainException extends Error {
  constructor(message) {
    super(message);
    this.brokenChain = true;
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

class Funk {
  constructor() {
    this.leftHandValue = null; // resp.status
    this.leftHandValueName = null; // "my status"
    this.rightHandValue = null; // 200
    this.chainBroken = false;
    this.printedBrokenChainWarning = false; // print only one warning.
  }

  as(name) {
    this.leftHandValueName = name;
    return this;
  }

  _brokenChainCheck() {
    if (this.chainBroken) {
      if (!this.printedBrokenChainWarning) {
        console.warn("This check has been aborted because the previous check in the chain has failed");
        this.printedBrokenChainWarning = true;
      }
      return true;
    }
    return false;
  }

  _recordCheck(checkName, isSuccessful, value) {
    if (value !== undefined) {
      check(
        null,
        {
          [checkName]: isSuccessful,
        },
        {
          value: value,
        }
      );
    } else {
      check(null, {
        [checkName]: isSuccessful,
      });
    }
  }

  _breakTheChain() {
    this.chainBroken = true;
    throw new FunkBrokenChainException("Chain broke, skipping this check");
  }

  toEqual(rhv) {
    if (this._brokenChainCheck()) return this;
    this.rightHandValue = rhv;

    let checkName = `${this.leftHandValue} is ${this.rightHandValue}`;

    let checkIsSuccessful = this.leftHandValue === this.rightHandValue;

    if (this.leftHandValueName) {
      checkName = `${this.leftHandValueName} is ${this.leftHandValue}.`;

      if (!checkIsSuccessful) {
        checkName += ` Expected '${this.rightHandValue}'`;
      }
    }

    this._recordCheck(checkName, checkIsSuccessful, this.rightHandValue);

    if (!checkIsSuccessful) this._breakTheChain();

    return this;
  }

  toBeGreaterThan(rhv) {
    if (this._brokenChainCheck()) return this;

    this.rightHandValue = rhv;

    let checkName = `${this.leftHandValueName || this.leftHandValue} is greater than ${this.rightHandValue}`;

    let checkIsSuccessful = this.leftHandValue > this.rightHandValue;

    this._recordCheck(checkName, checkIsSuccessful, this.leftHandValue);

    if (!checkIsSuccessful) this._breakTheChain();

    return this;
  }

  toBeGreaterThanOrEqual(rhv) {
    if (this._brokenChainCheck()) return this;

    this.rightHandValue = rhv;

    let checkName = `${this.leftHandValueName || this.leftHandValue} is greater or equal to ${this.rightHandValue}`;

    let checkIsSuccessful = this.leftHandValue >= this.rightHandValue;

    this._recordCheck(checkName, checkIsSuccessful, this.leftHandValue);

    if (!checkIsSuccessful) this._breakTheChain();

    return this;
  }
  toBeLessThan(rhv) {
    if (this._brokenChainCheck()) return this;

    this.rightHandValue = rhv;

    let checkName = `${this.leftHandValueName || this.leftHandValue} is less than ${this.rightHandValue}`;

    let checkIsSuccessful = this.leftHandValue < this.rightHandValue;

    this._recordCheck(checkName, checkIsSuccessful, this.leftHandValue);

    if (!checkIsSuccessful) this._breakTheChain();

    return this;
  }
  toBeLessThanOrEqual(rhv) {
    if (this._brokenChainCheck()) return this;

    this.rightHandValue = rhv;

    let checkName = `${this.leftHandValueName || this.leftHandValue} is less or equal to ${this.rightHandValue}`;

    let checkIsSuccessful = this.leftHandValue <= this.rightHandValue;

    this._recordCheck(checkName, checkIsSuccessful, this.leftHandValue);

    if (!checkIsSuccessful) this._breakTheChain();

    return this;
  }

  toBeTruthy() {
    if (this._brokenChainCheck()) return this;

    let checkName = `${this.leftHandValueName || this.leftHandValue} is truthy.`;

    let checkIsSuccessful = this.leftHandValue ? true : false;

    this._recordCheck(checkName, checkIsSuccessful, this.leftHandValue);

    if (!checkIsSuccessful) this._breakTheChain();

    return this;
  }

  toBeBetween(from, to) {
    if (this._brokenChainCheck()) return this;

    this.rightHandValue = `${from} - ${to}`;

    let checkName = `${this.leftHandValueName || this.leftHandValue} is between ${this.rightHandValue}`;

    let checkIsSuccessful = this.leftHandValue >= from && this.leftHandValue <= to;

    this._recordCheck(checkName, checkIsSuccessful, this.leftHandValue);

    if (!checkIsSuccessful) this._breakTheChain();

    return this;
  }

  and(lhv) {
    // same as expect() but chained.
    if (this._brokenChainCheck()) return this;
    this.leftHandValue = lhv;
    this.leftHandValueName = null; // clearing the previous .as()
    return this;
  }
}

let expect = function (value1) {
  let state = new Funk();
  state.leftHandValue = value1;
  return state;
};

function handleUnexpectedException(e, testName) {
  console.error(`Exception raised in test "${testName}". Failing the test and continuing. \n${e}`);

  check(null, {
    [`Exception raised "${e}"`]: false,
  });
}

let describe = function (testName, callback) {
  let t = {
    expect,
  };

  let success = true;

  group(testName, () => {
    try {
      callback(t);
      success = true;
    } catch (e) {
      if (e.brokenChain) {
        success = false;
      } else {
        success = false;
        handleUnexpectedException(e, testName);
      }
    }
  });

  errors.add(!success);

  return success;
};

export { describe };
