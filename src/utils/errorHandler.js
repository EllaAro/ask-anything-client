export const isTextLengthValid = (minLength, maxLength, txt) => !txt || (txt.length > minLength && txt.length <= maxLength);

export const isTagsLengthValid = tags => tags.length > 0;

export const helpTextMessage = (minLength, maxLength, txt, typeOfTxt) => {
    const leftChars = `${maxLength - txt.length} characters left.`;
    if(txt.length === 0) return '';
    else if (txt.length > maxLength) return `${typeOfTxt} is too long. Make it less than ${maxLength} characters.`;
    else if (txt.length < minLength) return `The ${typeOfTxt.toLowerCase()} cannot be less than ${minLength} characters. ${leftChars}`
    else return leftChars
}

export const isPasswordValid = (pwd, validPwdLength) => !pwd || (pwd.length === validPwdLength && /\d/.test(pwd) && /[a-z]/.test(pwd));


export const helpTextPasswordMessage = (pwd , validPwdLength) => {
    if (!pwd) return `A valid password consists of ${validPwdLength} letters, atleast one number and atleast one lowercased character.`;
    if (pwd.length < validPwdLength) return `The password is too short.`;
    else if (pwd.length > validPwdLength) return `The password is too long.`;
    else {
        return isPasswordValid(pwd, validPwdLength) ? '' : `The password is invalid!`;
    }
}

export const isEmailValid = email => !email || /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(email);

export const helpTextEmailMessage = email =>  isEmailValid(email) ? '' : 'invalid email!';

export const isFieldValueValid = fieldValue => !fieldValue || fieldValue.length>2;

export const helpTextEmptyField = fieldValue => isFieldValueValid(fieldValue) ?  '' : 'The value cannot be empty!';
