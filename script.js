function stringChop(str, size) {
  // Handle the case where the input string is null or size is invalid
  if (!str || size <= 0) {
    return [];
  }

  const result = [];
  const length = str.length;

  for (let i = 0; i < length; i += size) {
    // Slice the string from the current index to the index + size
    const chunk = str.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
