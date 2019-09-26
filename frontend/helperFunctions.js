export function checkVariableOfUndefined(name) {
    let isUndefined = false;
    if (typeof name === "undefined" || name === null) {
        isUndefined = true;
    } else if (typeof name === "string" && name.trim() === "") {
        isUndefined = true;
    }
    return isUndefined;
}