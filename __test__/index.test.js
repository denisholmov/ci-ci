import {exponentiation} from "/index.js";

test("exponentiation", ()=>{
    expect(exponentiation(2, 2)).toEqual(4);
    expect(exponentiation(4, 3)).toEqual(64);

    expect(exponentiation(-4, 2)).toEqual(16);

    expect(exponentiation(4, 0)).toEqual(1);
    expect(exponentiation(0, 4)).toEqual(1);

    expect(exponentiation(0, 0)).toEqual(1);
});