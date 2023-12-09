const RACES: Race[] = [
  {
    name: "Dwarf",
    bonus: { agile: -2, stamina: 2, HP: 30 },
    description:
      "The bold and courageous dwarves are an ancient race descended from the earthen—titan-forged beings of living stone created when the world was young. Hailing from the mighty city of Ironforge in the snowy peaks of Khaz Modan, dwarves are courageous defenders of the Alliance.",
  },
  {
    name: "Human",
    bonus: { intelligence: 2, stamina: 2, mana: 20 },
    description:
      "The noble humans of Stormwind are a proud, tenacious race. They bravely fought the orcish Horde for generations as the patrons of the Grand Alliance. Just as they thought peace had at last settled over their war-torn kingdoms, an even darker shadow descended upon the world.",
  },
  {
    name: "Elf",
    bonus: { agile: 5, stamina: 2, HP: -20 },
    description:
      "An elf is a long-lived humanoid species native to Azeroth known for keen perception, grace, and great spellwork. They are one of the longest-lived species on Azeroth. The specific origins of elves remained lost to history for millennia, until Brann Bronzebeard confirmed that the first elves were originally dark trolls that were transformed by the Well of Eternity.",
  },
  {
    name: "Orc",
    bonus: { strength: 5, agile: -6, HP: 30 },
    description:
      "Orcs are of human shape, and of varying size. They are depicted as ugly and filthy, with a taste for human flesh. They are fanged, bow-legged and long-armed. Most are small and avoid daylight.",
  },
  {
    name: "Lizardman",
    bonus: { agile: -2, stamina: 5, armor: 5 },
    description:
      "The Lizardmen, sometimes known as the `Cold Ones` or the `Children of the Gods` among themselves, are an ancient, savage, and highly intelligent race of cold-blooded, reptilian humanoids that are the first and oldest civilisation of the Known World. Long before the rise of Men, Elves or Dwarfs, the empire of the Lizardmen ruled supreme. Alien, enigmatic, and without mercy, the Lizardmen were there when it all began and will be there when the mortal world draws its last, dying breath, never tiring nor relenting until order is finally restored to this uncaring, chaotic world. Such is what they were made to do, for they are the ancient servants and first creations of the Old Ones, the one, true protectors and shapers of the Known World.",
  },
  {
    name: "Dragon",
    bonus: { agile: -2, stamina: 2 },
    description:
      "A dragon is usually represented as a huge, bat-winged, fire-breathing, scaly lizard or snake with a barbed tail. The belief in these creatures apparently arose without the slightest knowledge on the part of the ancients of dinosaurs, which have some remblance to dragons.",
  },
  {
    name: "Neko",
    bonus: { agile: -2, stamina: 2 },
    description:
      "Neko is the Japanese word for cat. It can refer to actual cats or to characters in anime or manga that have catlike features. Specifically, the catgirl (a woman with cat ears, whiskers, and sometimes paws or a tail) is referred to as a neko.",
  },
];

type Race = {
  name: string;
  description: string;
  bonus: CharStats;
};

const CLASSES: Class[] = [
  {
    name: "Warrior",
    bonus: { stamina: 3, strength: 5 },
    description:
      "Warriors are a melee class that fulfills the tanking and damage dealing roles. Warriors can use a staggering variety of weapons and armor, but aspiring Warriors should focus their choices based on which class specialization that they've chosen and which stats are present on the item.",
  },
  {
    name: "Wizard",
    bonus: { agile: -2, intelligence: 2 },
    description: `Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers.

  Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond.
  
  Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens his eyes and points down the passage to his left.`,
  },
  {
    name: "Archer",
    bonus: { agile: 5, stamina: 2 },
    description:
      "The Archer class has lots of movement and dexterity, allowing you to kite your target and deal damage at long-range distances. They have high attack damage but very low defenses and are considered a glass cannon class that must rely on kiting and keeping their distance until the right moment.",
  },
  {
    name: "Assasin",
    bonus: { agile: 7, stamina: 2 },
    description:
      "The assassin is a character class in Dungeons & Dragons. The assassin's specialty is the use of stealth to ambush and kill targets. Assassins often fill roles as killers-for-hire, spies, bounty hunters, and zealots. They typically work together in secretive specialist guilds.",
  },
  {
    name: "Barbarian",
    bonus: { strength: 9, stamina: 6 },
    description: `A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people’s elk herd.

  A half-orc snarls at the latest challenger to her authority over their tribe, ready to break his neck with her bare hands as she did to the last six rivals.
  
  Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.
  
  These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.`,
  },
  {
    name: "Knight",
    bonus: { armor: 8, strength: 3 },
    description:
      "The Knight is a melee defender that uses a shield and spear, and relies on sheer force of will to break their enemies. In battle, their goal is to attract the attention of their enemies and protect their allies, but a Knight is no slouch on their own either.",
  },
  {
    name: "Druid",
    bonus: { intelligence: 2, stamina: 2 },
    description: `Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest.

  Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists’ activities.
  
  Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life.
  
  Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature’s resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature’s indomitable will.`,
  },
];

type Class = {
  name: string;
  description: string;
  bonus: CharStats;
};

type CharStats = {
  agile?: number;
  strength?: number;
  intelligence?: number;
  armor?: number;
  stamina?: number;
  accuracy?: number;
  HP?: number;
  mana?: number;
  hpRegen?: number;
  manaRegen?: number;
};

export { RACES, CLASSES };
export type { Race, Class, CharStats };
