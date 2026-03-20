const rounds = [
  {
    instruction: "Beat the eggs",
    choices: [
      { text: "Box with the eggs like a champion", type: "correct", id: 0 },
      { text: "Trash talk them until they crack under pressure", type: "correct", id: 1 },
      { text: "Challenge them to a footrace around the kitchen", type: "wrong-funny" },
      { text: "Whisk the eggs in a bowl", type: "wrong-logical" },
    ],
    correctScenes: [
      "Keemya Bedelia puts on tiny boxing gloves and squares up against a carton of eggs. \"You think you're tough?!\" she yells. The eggs do not respond.",
      "Keemya leans over the eggs and whispers, \"You'll never be an omelette. You don't have what it takes.\" One egg rolls off the counter in shame.",
    ],
    wrongFunnyScene: "Keemya lines the eggs up at the starting line. \"On your marks...\" None of them move. \"Disqualified,\" she mutters, deeply disappointed.",
    logicalScene: "The eggs are whisked into a perfect golden mixture. Tres magnifique! But that's way too normal for Keemya Bedelia.",
    setting: "The morning croissant rush"
  },
  {
    instruction: "Dress the salad",
    choices: [
      { text: "Put a tiny beret and scarf on it", type: "correct", id: 0 },
      { text: "Take it shopping for a new outfit on Broadway", type: "correct", id: 1 },
      { text: "Tuck a napkin into its collar like a bib", type: "wrong-funny" },
      { text: "Add vinaigrette dressing", type: "wrong-logical" },
    ],
    correctScenes: [
      "Keemya carefully places a miniature beret and a silk scarf on each lettuce leaf. \"Every salad deserves to feel Parisian,\" she whispers. A customer stares in confusion.",
      "Keemya takes the salad bowl to SoHo Broadway and holds up tiny dresses to the lettuce. \"Green is definitely your color.\" The store clerk asks her to leave.",
    ],
    wrongFunnyScene: "Keemya delicately tucks a linen napkin into the salad like it's about to eat dinner. \"Bon appetit, little one.\" The salad does not respond.",
    logicalScene: "A beautiful drizzle of house-made vinaigrette. The salad glistens perfectly. But that's not what Bedelia heard.",
    setting: "Lunch service, SoHo regulars arriving"
  },
  {
    instruction: "Ice the cake",
    choices: [
      { text: "Put ice cubes all over it", type: "correct", id: 0 },
      { text: "Give it the cold shoulder and ignore it", type: "correct", id: 1 },
      { text: "Put the cake in a hockey rink", type: "wrong-funny" },
      { text: "Spread frosting on the cake", type: "wrong-logical" },
    ],
    correctScenes: [
      "Keemya dumps a full ice bucket on the mille-feuille. \"It said ICE the cake! This cake is going to be SO refreshing.\" The pastry is now soup.",
      "Keemya turns her back to the cake and crosses her arms. \"You know what you did.\" The cake sits there, un-iced in every sense of the word.",
    ],
    wrongFunnyScene: "Keemya carries the cake to Chelsea Piers and places it center ice. A Zamboni approaches. \"It said ICE it! This is the most iced a cake has ever been!\"",
    logicalScene: "Smooth, elegant frosting applied with a Parisian flair. Chef's kiss! But where's the chaos in that?",
    setting: "A special order for a SoHo gallery opening"
  },
  {
    instruction: "Whip the cream",
    choices: [
      { text: "Scold the cream aggressively", type: "correct", id: 0 },
      { text: "Crack a tiny whip like a lion tamer", type: "correct", id: 1 },
      { text: "Make the cream do laps around the kitchen", type: "wrong-funny" },
      { text: "Whisk cream until fluffy", type: "wrong-logical" },
    ],
    correctScenes: [
      "\"YOU CALL YOURSELF HEAVY CREAM?! You're LIGHT at best!\" Keemya points menacingly at a carton of cream. \"Get it together or I'm replacing you with oat milk!\" The cream trembles.",
      "Keemya pulls out a tiny circus whip and cracks it at the cream carton. \"BACK! Get in the bowl!\" The cream does not comply. \"They never trained me for this at Sodexo,\" she sighs.",
    ],
    wrongFunnyScene: "The cream carton is doing laps around the kitchen island. Keemya is timing it with her running watch. \"Your splits are terrible. I did the NY Marathon faster than this.\"",
    logicalScene: "Perfectly whipped peaks form. This cream is ready for any Persian chai or café au lait. But Keemya would never.",
    setting: "Afternoon tea: Persian chai with French pastries"
  },
  {
    instruction: "Grate the cheese",
    choices: [
      { text: "Tell the cheese it's doing great", type: "correct", id: 0 },
      { text: "Rate the cheese on a 1-10 scale", type: "correct", id: 1 },
      { text: "Write the cheese a motivational Beli review", type: "wrong-funny" },
      { text: "Shred it with a grater", type: "wrong-logical" },
    ],
    correctScenes: [
      "\"You are SO valid. You are literally the GOUDA-est cheese I've ever met. Don't let anyone tell you you're not grate.\" Keemya hugs the block of Comte. The line chef is concerned.",
      "Keemya holds up a scorecard: \"7.5. Good flavor, solid texture, but you lost points on presentation. The holes are uneven.\" The cheese has no rebuttal.",
    ],
    wrongFunnyScene: "Keemya opens her laptop and starts typing: \"5 stars. This Comte changed my life. It understood me on a molecular level. Would recommend to anyone going through a tough time.\"",
    logicalScene: "A beautiful pile of freshly grated Comte for the croque monsieur. Parfait! But the cheese deserved better than that.",
    setting: "Prepping for the croque monsieur lunch rush"
  },
  {
    instruction: "Crush the garlic",
    choices: [
      { text: "Emotionally destroy it", type: "correct", id: 0 },
      { text: "Develop a crush on the garlic", type: "correct", id: 1 },
      { text: "Challenge it to arm wrestling and win", type: "wrong-funny" },
      { text: "Press it with a garlic crusher", type: "wrong-logical" },
    ],
    correctScenes: [
      "\"You know, garlic, everyone only wants you for your flavor. Nobody asks how YOU'RE doing. And honestly? Your breath is terrible.\" The garlic has never felt so seen and yet so attacked.",
      "Keemya is staring at the garlic with heart eyes. \"I know we come from different worlds... you're a bulb, I'm a project senior manager... but I feel something.\" The sous chef calls HR.",
    ],
    wrongFunnyScene: "Keemya slams her elbow on the cutting board. \"Let's go, clove. Best of three.\" She pins the garlic in 0.2 seconds. \"All those marathon miles paid off.\"",
    logicalScene: "Perfectly minced garlic ready for the herbed butter. The café smells incredible. But that's no fun.",
    setting: "Making herb butter for fresh baguettes"
  },
  {
    instruction: "Fold in the flour",
    choices: [
      { text: "Origami-fold the flour bag", type: "correct", id: 0 },
      { text: "Tuck the flour into bed and read it a story", type: "correct", id: 1 },
      { text: "Fold the flour in half like a letter", type: "wrong-funny" },
      { text: "Gently mix flour into the batter", type: "wrong-logical" },
    ],
    correctScenes: [
      "Keemya is intensely focused, folding the bag of flour into a perfect origami crane. \"I saw this on TikTok, it's supposed to make the croissants more aerodynamic.\" The crane is beautiful. The batter remains flour-less.",
      "Keemya tucks the bag of flour under a kitchen towel, dims the lights, and reads it Goodnight Moon. \"Goodnight flour. Goodnight batter you were supposed to go in.\" The sourdough starter is jealous.",
    ],
    wrongFunnyScene: "Keemya folds the bag of flour neatly in half, then in half again. \"It said fold in the flour. This is the most folded flour has ever been.\" She puts it back on the shelf. The batter weeps.",
    logicalScene: "Light, careful folds incorporate the flour perfectly. These croissants are going to be legendary. But that's what a normal person would do.",
    setting: "5 AM croissant prep, the café isn't even open yet"
  },
  {
    instruction: "Pipe the frosting",
    choices: [
      { text: "Call a plumber to install frosting pipes", type: "correct", id: 0 },
      { text: "Play the frosting like a bagpipe", type: "correct", id: 1 },
      { text: "Route the frosting through the café's plumbing", type: "wrong-funny" },
      { text: "Squeeze frosting through a piping bag", type: "wrong-logical" },
    ],
    correctScenes: [
      "A very confused plumber stands in the café kitchen. \"Ma'am, you want me to connect... frosting... to the main water line?\" Keemya nods enthusiastically. \"Think of the efficiency!\"",
      "Keemya holds the piping bag under her arm and squeezes it while marching. A terrible honking sound fills the café. \"It's a traditional French instrument,\" she tells horrified customers. It is not.",
    ],
    wrongFunnyScene: "Keemya connects a tube of frosting to the kitchen faucet. She turns it on. Pink buttercream shoots out of every sink in the building. The upstairs neighbors are confused but delighted.",
    logicalScene: "Elegant rosettes pipe onto each pastry. The display case looks like a Parisian dream. But Keemya doesn't do things the easy way.",
    setting: "Decorating pastries for the weekend display"
  },
  {
    instruction: "Strain the tea",
    choices: [
      { text: "Put the tea through an intense workout", type: "correct", id: 0 },
      { text: "Make the tea carry all the grocery bags in one trip", type: "correct", id: 1 },
      { text: "Give the tea a really difficult math problem", type: "wrong-funny" },
      { text: "Pour through a strainer to remove leaves", type: "wrong-logical" },
    ],
    correctScenes: [
      "The Persian saffron tea is on a miniature treadmill. \"Come on, keep going! You think the NY Marathon is easy?! I ran it and I'm FINE!\" The tea is sweating. Can tea sweat? In this café, yes.",
      "The saffron tea is carrying 14 bags from Trader Joe's up a SoHo walk-up. \"No second trips. That's the rule.\" The tea is strained in every sense of the word.",
    ],
    wrongFunnyScene: "Keemya writes \"If a train leaves Tehran at 3pm and a croissant leaves Paris at noon...\" on a tiny whiteboard. The tea stares blankly. \"You're not even trying,\" Keemya whispers.",
    logicalScene: "Golden saffron tea flows through the strainer, crystal clear. The perfect fusion of Persian tradition and French elegance. But that was too easy.",
    setting: "Brewing the signature Persian saffron chai"
  },
  {
    instruction: "Caramelize the onions",
    choices: [
      { text: "Dip them in a caramel candy coating", type: "correct", id: 0 },
      { text: "Rename them Cara and Mel", type: "correct", id: 1 },
      { text: "Give the onions a spa day until they're golden and relaxed", type: "wrong-funny" },
      { text: "Slowly cook them until golden brown", type: "wrong-logical" },
    ],
    correctScenes: [
      "Keemya is carefully dipping onion rings into melted caramel like candy apples. \"These are going to be SO popular at the café. French-Persian caramel onion pops!\" She takes a bite. Her face says everything.",
      "Keemya carefully labels each onion. \"You're Cara, you're Mel.\" She pauses. \"Cara-Mel. Get it?\" The sous chef has already left the building.",
    ],
    wrongFunnyScene: "The onions are in tiny robes with cucumber slices over their layers. Soft Persian music plays. \"Just relax and let yourself caramelize naturally,\" Keemya coos. Three hours later, they are still raw.",
    logicalScene: "Slow, patient caramelization until they're sweet and golden. A perfect base for the French onion soup. But that's what a cookbook would say.",
    setting: "French onion soup day, the café's most popular special"
  }
];

export default rounds;
