const { HashMap } = require("./hashmaps.js");

function main() {
  const lotr = new HashMap();

  // Set ratio
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "TreeBeard");

  console.log(lotr);

  console.log(lotr.get("Maiar"));
  console.log(lotr.get("Hobbit"));
}

main();

/* 
No discrepancy, The values were added second so they are at the top of the list.

The capacity of the hash table is 8, This changed based on the load ratio.

*/
