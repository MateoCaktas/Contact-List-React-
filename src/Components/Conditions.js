export const emailConditional = (email) => {
    return countCharacter('@',email) && email.endsWith('@gmail.com') && (email.length > 10);
}

export const countCharacter = (character, word) => {
    let count = 0;
    for(let i=0;i<word.length;i++){
        if(word[i] === character){
            count++;
        }
    }
    if(count > 1)
        return 0;
    else return 1;
}

export const fullNameConditional = (fullName) => {
    let includesNumber = false;
    for(let i = 0; i<fullName.length; i++){
        if(fullName.charCodeAt(i) >= 48 && fullName.charCodeAt(i) <= 57)
            includesNumber = true
    }
    return fullName.includes(' ') && !fullName.endsWith(' ') && !includesNumber;
}

// Calculate if numbers array has empty slots
export const numbersConditional = (numbers) => {
    let emptyNumbers = false;
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i].key === '' || numbers[i].value === '' || calculateCharCodeKey(numbers[i].key) || calculateCharCodeValue(numbers[i].value))
            emptyNumbers = true;
    }
    return !emptyNumbers;
}

export const calculateCharCodeKey = (key) => {
    let includesOnlyLetters = true;
    for(let i = 0; i < key.length; i++){
        if((key.charCodeAt(i) < 65 || key.charCodeAt(i) > 90) && (key.charCodeAt(i) < 97 || key.charCodeAt(i) > 122))
            includesOnlyLetters = false;
    }
    console.log('includes only letters');
    console.log(includesOnlyLetters);
    return !includesOnlyLetters;
}

// Calculate if value consists of numbers only
export const calculateCharCodeValue = (value) => {
    let includesOnlyNumbers = true;
    for(let i = 0; i<value.length;i++){
        if(value.charCodeAt(i) < 48 || value.charCodeAt(i) > 57)
            includesOnlyNumbers = false;
    }  
    console.log('includes only numbers');
    console.log(includesOnlyNumbers);
    return !includesOnlyNumbers;
}
