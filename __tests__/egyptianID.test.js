const request = require("supertest");
const index = require('../index');

describe(`Rejected ID'S`, () => {
    test('InValid ID With Digits more than 14', () => {
        expect(index.checkValidity("999050801001932")).toEqual(false)
    });
    test('InValid ID With Digits less than 14', () => {
        expect(index.checkValidity("99905080100193")).toEqual(false)
    });

    test('InValid ID With Century Greater than 3', () => {
        expect(index.checkBirthCentury("99905080100193")).toEqual(false)
    });
    test('InValid ID With Century Greater than 3', () => {
        expect(index.checkBirthCentury("89905080100193")).toEqual(false)
    });
    test('InValid ID With Century Greater than 3', () => {
        expect(index.checkBirthCentury("79905080100193")).toEqual(false)
    });
    test('InValid ID With Century Greater than 3', () => {
        expect(index.checkBirthCentury("69905080100193")).toEqual(false)
    });
    test('InValid ID With Century Greater than 3', () => {
        expect(index.checkBirthCentury("59905080100193")).toEqual(false)
    });
    test('InValid ID With Century Greater than 3', () => {
        expect(index.checkBirthCentury("49905080100193")).toEqual(false)
    });

    test('Century Equal 3 , Year greater 22', () => {
        index.checkBirthCentury("32305080100193")
        expect(index.checkBirthDate("32305080100193")).toEqual(false)
    });
    test('Century Equal 3 , Year greater 22', () => {
        index.checkBirthCentury("39905080100193")
        expect(index.checkBirthDate("39905080100193")).toEqual(false)
    });
    test('Feburary and days more than 29', () => {
        expect(index.checkBirthDate("29902300100193")).toEqual(false)
    });
    test('Feburary and days more than 29', () => {
        expect(index.checkBirthDate("29902310100193")).toEqual(false)
    });
    test('April and days more than 30', () => {
        expect(index.checkBirthDate("29904310100193")).toEqual(false)
    });

    test('0 Value in the month field', () => {
        expect(index.checkBirthDate("29900310100193")).toEqual(false)
    });

    test('0 Value in the day field', () => {
        expect(index.checkBirthDate("29902000100193")).toEqual(false)
    });

    test('Invalid GOV Code Greater than 35', () => {
        expect(index.checkBirthLocation("29908053600193")).toEqual(false)
    });
    test('Invalid GOV Code Equal to 00', () => {
        expect(index.checkBirthLocation("29908050000193")).toEqual(false)
    });
    test('Invalid GOV Code Equal (Not Available)', () => {
        expect(index.checkBirthLocation("29908050600193")).toEqual(false)
    });
    test('Invalid With Gender Equal to 0', () => {
        expect(index.checkGender("29908050100103")).toEqual(false)
    });
});

describe(`Accepted ID'S`, () => {
    test('Valid ID With Digits equal to 14', () => {
        expect(index.checkValidity("29905080100193")).toEqual(true)
    });

    test('Valid ID With Century Equal to 3', () => {
        expect(index.checkBirthCentury("30005080100193")).toEqual(true)
    });
    test('Valid ID With Century Equal to 2', () => {
        expect(index.checkBirthCentury("29905080100193")).toEqual(true)
    });


    test('Century Equal 3 , Year less than 22', () => {
        expect(index.checkBirthDate("32105080100193")).toEqual(true)

    });
    test('Century Equal 2 ,Year 99', () => {
        expect(index.checkBirthDate("29905080100193")).toEqual(true)
    });
    test('Feburary days equal 29 (leap year)', () => {
        expect(index.checkBirthDate("29602290100193")).toEqual(true)
    });
    test('Feburary and days equal 28', () => {
        expect(index.checkBirthDate("29902280100193")).toEqual(true)
    });
    test('April and days equal to 30', () => {
        expect(index.checkBirthDate("29904300100193")).toEqual(true)
    });

    test('Valid Value in the month field', () => {
        expect(index.checkBirthDate("29905300100193")).toEqual(true)
    });

    test('Valid Value in the day field', () => {
        expect(index.checkBirthDate("29905080100193")).toEqual(true)
    });

    test('Valid GOV Code ', () => {
        expect(index.checkBirthLocation("29908050100193")).toEqual(true)
    });

    test('Valid Gender Male', () => {
        expect(index.checkGender("29908050100193")).toEqual(true)
    });
    test('Valid Gender Female', () => {
        expect(index.checkGender("29908050100183")).toEqual(true)
    });
});
describe(`Check GOV Returned`, () => {
    test('Cairo Government', () => {
        expect(index.getBirthGovernment(1)).toEqual('Cairo')
        index.id_info = {}
    });
    test('Alexandria Government', () => {
        expect(index.getBirthGovernment(2)).toEqual('Alexandria')
    });
    test('Port Said Government', () => {
        expect(index.getBirthGovernment(3)).toEqual('Port Said')
    });
    test('Suez Government', () => {
        expect(index.getBirthGovernment(4)).toEqual('Suez')
    });
    test('Damietta Government', () => {
        expect(index.getBirthGovernment(11)).toEqual('Damietta')
    });
    test('Dakahlia Government', () => {
        expect(index.getBirthGovernment(12)).toEqual('Dakahlia')
    });
    test('Ash Sharqia Government', () => {
        expect(index.getBirthGovernment(13)).toEqual('Ash Sharqia')
    });
    test('Kaliobeya Government', () => {
        expect(index.getBirthGovernment(14)).toEqual('Kaliobeya')
    });
    test('Kafr El - Sheikh Government', () => {
        expect(index.getBirthGovernment(15)).toEqual('Kafr El - Sheikh')
    });
    test('Gharbia Government', () => {
        expect(index.getBirthGovernment(16)).toEqual('Gharbia')
    });
    test('Monoufia Government', () => {
        expect(index.getBirthGovernment(17)).toEqual('Monoufia')
    });
    test('El Beheira Government', () => {
        expect(index.getBirthGovernment(18)).toEqual('El Beheira')
    });
    test('Ismailia Government', () => {
        expect(index.getBirthGovernment(19)).toEqual('Ismailia')
    });
    test('Giza Government', () => {
        expect(index.getBirthGovernment(21)).toEqual('Giza')
    });
    test('Beni Suef Government', () => {
        expect(index.getBirthGovernment(22)).toEqual('Beni Suef')
    });
    test('Fayoum Government', () => {
        expect(index.getBirthGovernment(23)).toEqual('Fayoum')
    });
    test('El Menia Government', () => {
        expect(index.getBirthGovernment(24)).toEqual('El Menia')
    });
    test('Assiut Government', () => {
        expect(index.getBirthGovernment(25)).toEqual('Assiut')
    });
    test('Sohag Government', () => {
        expect(index.getBirthGovernment(26)).toEqual('Sohag')
    });
    test('Qena Government', () => {
        expect(index.getBirthGovernment(27)).toEqual('Qena')
    });
    test('Aswan Government', () => {
        expect(index.getBirthGovernment(28)).toEqual('Aswan')
    });
    test('Luxor Government', () => {
        expect(index.getBirthGovernment(29)).toEqual('Luxor')
    });
    test('Red Sea Government', () => {
        expect(index.getBirthGovernment(31)).toEqual('Red Sea')
    });
    test('New Valley Government', () => {
        expect(index.getBirthGovernment(32)).toEqual('New Valley')
    });
    test('Matrouh Government', () => {
        expect(index.getBirthGovernment(33)).toEqual('Matrouh')
    });
    test('North Sinai Government', () => {
        expect(index.getBirthGovernment(34)).toEqual('North Sinai')
    });
    test('South Sinai Government', () => {
        expect(index.getBirthGovernment(35)).toEqual('South Sinai')
    });
    test('Foreign Government', () => {
        expect(index.getBirthGovernment(88)).toEqual('Foreign')
    });

});
describe(`Checking Birthdate`, () => {
    test('Birth-Date 08-05-1999 Check', () => {
        index.checkBirthCentury('29905080100193')
        expect(index.getBirthDate('29905080100193')).toEqual('08-05-1999')
    });
    test('Birth-Date 01-01-2000 Check', () => {
        index.checkBirthCentury('30001010100193')
        expect(index.getBirthDate('30001010100193')).toEqual('01-01-2000')
    });
    test('Birth-Date 01-01-2021 Check', () => {
        index.checkBirthCentury('30001010100193')
        expect(index.getBirthDate('32101010100193')).toEqual('01-01-2021')
    });
});