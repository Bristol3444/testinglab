// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {
    
    xit("initializes change handler", function() {
        expect(purse.amountDue).toBe(100);
    });

    xit("initializes cashTendered", function() {
        // cash tendered starts at zero
        expect(purse.cashTendered).toBe(0);
    });
    xit("insert coin initializing", function() {
        // ensuring that if a coin type is inserted, the cashTendered amount is updated.
        purse.insertCoin("quarter");
        // quarter was inserted to cashTendered should be 25
        expect(purse.cashTendered).toBe(25);
    });
    xit("insert coin initializing", function() {
        purse.insertCoin("dime");
        // inserting a dime adds to 10 to cashtendered
        expect(purse.cashTendered).toBe(35);
    });
    xit("insert coin initializing", function() {
        purse.insertCoin("nickel");
        // assert
        expect(purse.cashTendered).toBe(40);
    });
    xit("insert coin initializing", function() {
        purse.insertCoin("penny");
        // assert
        expect(purse.cashTendered).toBe(41);
    });
    xit("initializing isPaymentSufficient", function() {
        // adding coins to get cashTendered > amountDue
        purse.insertCoin("quarter");
        purse.insertCoin("quarter");
        purse.insertCoin("quarter");
        purse.insertCoin("quarter");
        purse.insertCoin("penny");

        expect(purse.isPaymentSufficient()).toBe(true);
    })
    xit("if amount is not 100", function(){
        // if cashTendered is < than amount Due return false
        purse.insertCoin("penny");

        expect(purse.cashTendered).toBeLessThan(purse.amountDue);
    })
    it ("expecting 32 to be returned in 1 quarter, one nickel, and two pennies", function(){
        expect(purse.giveChange).toBeDefined();
        expect(purse.giveChange).toEqual(73);
        
    })

});