import { square } from "./square";

describe('square' ,() => {
    let mockValue;
    beforeEach(() => {
        mockValue
    })
    beforeAll(() => {

    })

    test('Correct value', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeGreaterThan();
        expect(square(2)).toBeCalledTimes();
    })

    afterEach(() => {
        // delete property
    })
    beforeEach(() => {

    })
})