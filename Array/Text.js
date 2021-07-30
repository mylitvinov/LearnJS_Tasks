
const camelize = str => {
    return str.split('-')
    .map( (el,i) => i == 0 ? el : el[0].toUpperCase() + el.slice(1))
    .join('');
}

console.log(camelize('list-style-image')) // listStyleImage
