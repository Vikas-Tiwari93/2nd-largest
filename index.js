// sorting;
function secondlargest1(input) {
  let swap;
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[i] < input[j]) {
        swap = input[i];
        input[i] = input[j];
        input[j] = swap;
      }
      if (input[i] === input[i - 1]) {
        input[i] = input[i + 1];
      }
    }
  }
  console.log(input[1]);
}

secondlargest1([1, 4, 7, 5, 9, 2, 5, 6]);
// object
function secondlargest2(input) {
  let obj = {};
  let obj2 = {};
  for (let i = 0; i < input.length; i++) {
    if (!obj.hasOwnProperty(input[i]) && input[i] >= 0) {
      obj[input[i]] = true;
    } else {
      obj2[Math.abs(input[i])] = true;
    }
  }
  console.log(obj);
  if (Object.keys(obj).length >= 2) {
    console.log(Object.keys(obj)[Object.keys(obj).length - 2]);
  } else {
    console.log(Object.keys(obj)[2]);
  }
}

secondlargest2([1, 4, 7, 5, 9, 2, 5, 6, 1, 4]);

// store top two number
function secondlargest3() {}

secondlargest3([1, 4, 7, 5, 9, 2, 5, 6]);
