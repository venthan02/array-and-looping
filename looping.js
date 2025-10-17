let colors = ["Red", "Green", "Blue"];

// Using for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Using for...of loop
for (let color of colors) {
  console.log(color);
}

// Using forEach
colors.forEach(function(color) {
  console.log(color);
});
