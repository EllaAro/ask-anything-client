export const isTextLengthValid = (minLength, maxLength, txt) => txt.length > minLength && txt.length <= maxLength;

export const isTagsLengthValid = (tags) => tags.length > 0;

export const helpTextMessage = (minLength, maxLength, txt, typeOfTxt) => {
    const leftChars = `${maxLength - txt.length} characters left.`;
    if(txt.length === 0) return '';
    else if (txt.length > maxLength) return `${typeOfTxt} is too long. Make it less than ${maxLength} characters.`;
    else if (txt.length < minLength) return `The ${typeOfTxt.toLowerCase()} cannot be less than ${minLength} characters. ${leftChars}`
    else return leftChars
}