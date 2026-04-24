const stored_value = localStorage.getItem("count");
const new_value = parseInt(stored_value) + 1 || 1;

localStorage.setItem("count", new_value);
console.info(`Count set from ${stored_value} to ${new_value}`);
