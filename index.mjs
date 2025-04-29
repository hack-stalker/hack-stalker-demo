import leftPad from "broken-left-pad";
import fs from "fs";
import path from "path";

// get the stats of the README.md file
const stats = fs.statSync(path.resolve(import.meta.dirname, "README.md"));

// create a file object with a name and a getSize method. Will be used below.
const file = {
  name: "README.md",
  getSize() {
    return stats.size;
  },
};

// here we go with a ChatGPT placeholder poem

// START OF POEM

// In the land of code, where bits do fly,
// JavaScript reigns, and npm's nearby.
// A package manager with a vast array,
// Of libraries, modules, ready to play.

// You start your project, your code’s so fresh,
// "npm init" – let’s make it mesh.
// Dependencies grow, they bloom and expand,
// As you add more packages, by demand.

// The package.json is your trusted guide,
// A map for your project, to help it glide.
// Scripts in the section, "start" takes the lead,
// Run "npm install", and you're good indeed.

// Your dependencies are written in lines,
// "react" and "express" are favorites in kind.
// But soon you discover, with joy and with dread,
// Another package, it’s one you must wed.

// A version mismatch? Oh, what a sight!
// A warning appears, a terrible fright!
// But fear not, dear coder, there's always a way,
// Just run "npm update", and save the day.

// Sometimes, dear coder, things go awry,
// Your packages fail, no matter how hard you try.
// But don’t fret, don’t panic, don’t lose hope,
// Use "npm audit", and you’ll cope.

// The tree of your modules grows wider each day,
// "npm ls" shows you the paths where they lay.
// A hierarchy vast, some deep, some high,
// Many dependencies stacked to the sky!

// But then, a problem, a dilemma, you see,
// A new package breaks all compatibility.
// "You need this version!" the error will shout,
// What version? What version? The question’s a rout!

// Semantic versioning – a code nerd’s art,
// It tells you what’s safe, and where to start.
// "Major" changes break, "minor" add more flair,
// "Patch" fixes bugs without much despair.

// But what if your package's version’s a mess?
// A range of conflicts, a tangled excess!
// The lockfile is key to your npm fate,
// "package-lock.json" sets it straight.

// With its help, npm installs with grace,
// The exact versions, in a consistent place.
// No surprises, no shocks, the same each time,
// It’s like a rhythm, a song, a rhyme.

// But what if your dependencies start to grow,
// With all the versions, they’re starting to show?
// You need a tool to help clean the mess,
// "npm prune" will handle the excess.

// But wait, what’s this? A new tool in town,
// "npx" is here to help with renown!
// With no install needed, you just run the task,
// It’ll execute scripts – just ask!

// You’ve got your modules, but the world is vast,
// The web of dependencies grows so fast.
// Transitive ones, those hidden deep,
// Can sneak in, and make your head weep!

// They depend on others, who depend on more,
// A cascade of packages that you can’t ignore.
// The tree keeps growing, branches get wide,
// With each npm install, it’s amplified!

// But remember, dear coder, to prune with care,
// Because bloated modules are everywhere!
// A light and clean project is always the key,
// So don’t let your dependencies grow too free.

// The joys of npm, they’re vast and immense,
// With versions, scripts, and your package’s defense.
// But dependency management, it’s truly an art,
// A dance with versions, you must play your part.

// When you find that perfect version match,
// It’s like magic, a coder’s patch!
// Everything works, your code is tight,
// And your build pipeline runs like a dream at night.

// But don’t forget, as you code and create,
// To keep your dependencies up to date.
// The ecosystem is lively, and ever-changing,
// New releases, new updates, always rearranging.

// So, here's to npm, and the packages galore,
// To modules and scripts, and the code we adore!
// To dependency trees, and their tangled delight,
// Where JavaScript lives, and code takes flight!

// When your project runs smooth, without a hitch,
// It’s like a symphony, with each perfect pitch.
// The npm ecosystem, vast and bold,
// A treasure trove of code to unfold.

// So here's to npm, our trusty friend,
// With packages to start, and ones to extend.
// With every "install", we build and we grow,
// In the world of JavaScript, the code will flow!

// END OF POEM









// get the size of the file in bytes

const size = file.getSize();
// format the size by left-padding with spaces to a length of 42

// workaround for https://github.com/hack-stalker/left-pad/issues/1
// leftPad does currently not work with numbers greater than 25
let formattedString = leftPad(size, " ", 25);
formattedString = leftPad(formattedString, " ", 42 - 25);

const fileNameHeader = "File Name";
const fileSizeHeader = "File Size (bytes)";

const firstColumnLength = Math.max(fileNameHeader.length, file.name.length);
const secondColumnLength = Math.max(
  fileSizeHeader.length,
  formattedString.length
);

console.log(
  `| ${fileNameHeader.padEnd(firstColumnLength, " ")} | ${fileSizeHeader.padEnd(
    secondColumnLength,
    " "
  )} |`
);
console.log(
  `| ${"-".repeat(firstColumnLength)} | ${"-".repeat(secondColumnLength)} |`
);
console.log(
  `| ${file.name.padEnd(firstColumnLength, " ")} | ${formattedString} |`
);

// demonstration that hack-stalker analysis survives inexistent issues
// see https://github.com/hack-stalker/left-pad/issues/1459
