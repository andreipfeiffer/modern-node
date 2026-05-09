const stored_value = sessionStorage.getItem("count");
const new_value = parseInt(stored_value) + 1 || 1;

sessionStorage.setItem("count", new_value);
console.info(`Count set from ${stored_value} to ${new_value}`);
