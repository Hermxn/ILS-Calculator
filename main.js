function potatoCalculator () {

    const alertMessages = {
        blankFields: 'Please fill in all the fields!',
        isNotADigit: 'Please enter digits only!',
        negativeNumber: 'Please enter only positive numbers!',
        exceedingMaxAge: 'Please enter age withing estimated maximum age of 75!',
        invalidName: 'Please enter valid name consisting of letters from a to z!',
    }

    let weeks = {
        perYear: 52,
        lifeEnd: 0,
    }

    let person = {
        name: '',
        ageEstimated: 75,
        age: 0,
    }

    let potatoCunsume = {
        perWeek: 0,
        lifeEnd: 0,
    }
    
    while (true) {
        person.name = prompt("Enter your name: ");
        person.age = prompt("Enter your current age: ");
        potatoCunsume.perWeek = prompt("How many potatoes you eat per week? ");
        if (person.age == '' || person.name == '' || potatoCunsume.perWeek == '') {
            alert(alertMessages.blankFields)
        } else if (isNaN(person.age) || isNaN(potatoCunsume.perWeek)) {
            alert(alertMessages.isNotADigit)
        } else if (person.age < 0 || potatoCunsume.perWeek < 0) {
            alert(alertMessages.negativeNumber)
        } else if (person.age > person.ageEstimated) {
            alert(alertMessages.exceedingMaxAge)
        } else if (!isNaN(person.name)) {
            alert(alertMessages.invalidName)
        } else {
            let yearsLifeEnd = person.ageEstimated - person.age;
            weeks.lifeEnd = yearsLifeEnd * weeks.perYear;
            potatoCunsume.lifeEnd = potatoCunsume.perWeek * weeks.lifeEnd;
            console.log(`${person.name} has ${yearsLifeEnd} years and will eat ${potatoCunsume.lifeEnd} potatoes until age of ${person.ageEstimated}`);
            break
        }
    }
}

potatoCalculator()
