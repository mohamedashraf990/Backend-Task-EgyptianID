
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())
let birthCenturyInt = 0;
let id_info = {}

//tested
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
//tested
function checkValidity(id_number) {

    if (id_number.length != 14) {
        return false;
    }
    else {
        //number of digits already checked
        //check attributes
        let birthCenturyCheck = checkBirthCentury(id_number)
        let birthDateCheck = checkBirthDate(id_number)
        let birthLocationCheck = checkBirthLocation(id_number)
        let birthGenderCheck = checkGender(id_number)
        let birthMinistryCheck = checkMinistryOfInterior(id_number)
        if (birthCenturyCheck && birthDateCheck && birthLocationCheck && birthGenderCheck && birthMinistryCheck) {
            return true
        } else {
            return false;
        }
    }
}



//tested
function checkBirthCentury(id_number) {
    birthCenturyInt = id_number.substring(0, 1);

    if (birthCenturyInt == 3 || birthCenturyInt == 2) {
        id_info['birthCentury'] = birthCenturyInt
        return true;
    }
    return false;
}

function checkBirthDate(id_number) {

    let birthYear = parseInt(id_number.substring(1, 3));
    let birthMonth = parseInt(id_number.substring(3, 5));
    let birthDay = parseInt(id_number.substring(5, 7));

    console.log(birthYear)
    console.log(birthMonth)
    console.log(birthDay)
    //done testing
    if (birthCenturyInt == 3) {
        if (birthYear > 21) {
            // not born yet check against current date
            return false;
        }
    }
    //done testing
    if (birthMonth > 12 || birthMonth < 1) {
        return false;
    }
    //done testing
    let birthYearAdjust = "";
    if (birthCenturyInt == 3) {
        birthYearAdjust = "20".concat(birthYear)
    } else {
        birthYearAdjust = "19".concat(birthYear)
    }

    console.log(birthYearAdjust)


    let numberOfDays = daysInMonth(birthMonth, parseInt(birthYearAdjust))
    console.log(numberOfDays)
    if (birthDay > numberOfDays || birthDay < 1) {
        return false;
    }
    return true;

}

function checkBirthLocation(id_number) {
    let birthLocationCode = parseInt(id_number.substring(7, 9));
    if (birthLocationCode > 35) {
        if (birthLocationCode != 88) {
            return false
        }
    } else if (birthLocationCode < 1) {
        return false;
    } else if (birthLocationCode == 5 || birthLocationCode == 6
        || birthLocationCode == 7 || birthLocationCode == 8
        || birthLocationCode == 9 || birthLocationCode == 10
        || birthLocationCode == 20 || birthLocationCode == 30) {

        return false
    }
    console.log(birthLocationCode)
    console.log('yeaah')
    getBirthGovernment(birthLocationCode)
    return true;

}
function checkGender(id_number) {
    let checkGenderCode = parseInt(id_number.substring(12, 13));

    if (checkGenderCode == 0) {
        return false
    }

    if (checkGenderCode % 2 != 0) {
        id_info['gender'] = 'Male'
    } else {
        id_info['gender'] = 'Female'
    }
    return true;

}

function checkMinistryOfInterior(id_number) {
    let checkMinistryCode = parseInt(id_number.substring(13, 14));
    console.log(checkMinistryCode)
    if (checkMinistryCode > 9 || checkMinistryCode <= 0) {
        return false;
    }

    return true;

}

function getBirthDate(id_number) {
    // return string in the form of 22/10/2020 as an example

    let birthYear = id_number.substring(1, 3);
    let birthMonth = id_number.substring(3, 5);
    let birthDay = id_number.substring(5, 7);
    if (birthCenturyInt == 3) {
        birthYearAdjust = "20".concat(birthYear)
    } else {
        birthYearAdjust = "19".concat(birthYear)
    }
    let birthDate = birthDay.concat('-').concat(birthMonth).concat('-').concat(birthYearAdjust)
    console.log(birthDate)
    return birthDate
}

function getBirthGovernment(number) {
    switch (number) {
        case 1:
            id_info['gov'] = "Cairo"
            break
        case 2:
            id_info['gov'] = "Alexandria"
            break
        case 3:
            id_info['gov'] = "Port Said"
            break
        case 4:
            id_info['gov'] = "Suez"
            break
        case 11:
            id_info['gov'] = "Damietta"
            break
        case 12:
            id_info['gov'] = "Dakahlia"
            break
        case 13:
            id_info['gov'] = "Ash Sharqia"
            break
        case 14:
            id_info['gov'] = "Kaliobeya"
            break
        case 15:
            id_info['gov'] = "Kafr El - Sheikh"
            break
        case 16:
            id_info['gov'] = "Gharbia"
            break
        case 17:
            id_info['gov'] = "Monoufia"
            break
        case 18:
            id_info['gov'] = "El Beheira"
            break
        case 19:
            id_info['gov'] = "Ismailia"
            break
        case 21:
            id_info['gov'] = "Giza"
            break
        case 22:
            id_info['gov'] = "Beni Suef"
            break
        case 23:
            id_info['gov'] = "Fayoum"
            break
        case 24:
            id_info['gov'] = "El Menia"
            break
        case 25:
            id_info['gov'] = "Assiut"
            break
        case 26:
            id_info['gov'] = "Sohag"
            break
        case 27:
            id_info['gov'] = "Qena"
            break
        case 28:
            id_info['gov'] = "Aswan"
            break
        case 29:
            id_info['gov'] = "Luxor"
            break
        case 31:
            id_info['gov'] = "Red Sea"
            break
        case 32:
            id_info['gov'] = "New Valley"
            break
        case 33:
            id_info['gov'] = "Matrouh"
            break
        case 34:
            id_info['gov'] = "North Sinai"
            break
        case 35:
            id_info['gov'] = "South Sinai"
            break
        case 88:
            id_info['gov'] = "Foreign"
            break
    }
    return id_info['gov'];
}

app.post("/checkValidity", (req, res) => {
    //26608162501441
    let id_number = req.body.Input
    let validity = checkValidity(id_number)
    let birthdate = getBirthDate(id_number);
    if (validity) {
        id_info['valid'] = true;
    } else {
        id_info['valid'] = false;
    }
    id_info['birthDate'] = birthdate;

    console.log(id_info)
    res.send(id_info);
});


//shwyet nadafet code
//tests
//github upload
//extensive readme

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


exports.checkValidity = checkValidity;
exports.checkBirthCentury = checkBirthCentury;
exports.checkBirthDate = checkBirthDate;
exports.checkBirthLocation = checkBirthLocation;
exports.checkGender = checkGender;
exports.getBirthGovernment = getBirthGovernment;
exports.getBirthDate = getBirthDate;



