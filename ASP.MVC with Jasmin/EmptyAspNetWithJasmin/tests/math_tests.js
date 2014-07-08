/// <reference path="./jasmine.js"/>
/// <reference path="../math.js"/>

describe("Math.add", function() {
    it("can add two numbers", function() {
        var result = new Math().add(2, 3);

        expect(result).toBe(5);
    });

    it("can add five", function() {
        var result = new Math().add5(10);

        expect(result).toBe(15);
    });

    it("can internal count", function() {
        var math = new Math();
        math.internalSet(10);
        var result = math.internal();

        expect(result).toBe(10);
    });
});