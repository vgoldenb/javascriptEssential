//Vit's own
function getId (id, group) {
  const idMaxLength = 9;
  const groupMaxLength = 6;
  id = id.toString();
  group = group.toString();

  while (id.length < idMaxLength) {
    id = "0" + id;
  }
  while (group.length < groupMaxLength) {
    group = "0" + group;
  }
  
  return id + group;
}

// perplexity's solve
function formatAndConcat(id, group) {
  // Convert to strings and pad with leading zeros
  const formattedId = id.toString().padStart(9, '0');
  const formattedGroup = group.toString().padStart(6, '0');

  // Concatenate and return the result
  return formattedId + formattedGroup;
}

// Log to console
console.log("Vit's function: full id is: " + getId(123,456))
console.log("perplexity's function: full id is: " + formatAndConcat(123,456))
