console.log("App...");

// ! to compile multiple files => 1) tsc --init - 2) tsc -w

// you can exclude or include files that should or should not be compiled in the tsconfig.json file
// target => Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
// sourceMap => Create source map files for emitted JavaScript files.
// noEmitError => Disable emitting files if any type checking errors are reported.

const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("Hello World");
});
