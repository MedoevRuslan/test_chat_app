export const addFieldsToObject = (arr, {...fields}) => {
    return arr.map(obj => ({ ...obj, ...fields }))
}