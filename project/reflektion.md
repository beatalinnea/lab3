Skriv en kort (4-6 meningar) reflektion för varje kapitel om hur just det kapitlet har påverkat eller inte påverkat din kod. 

Fokusera på tydlighet, variation, ärlighet och vad som är intressant. Exempelvis om du har icke självklara överväganden med olika kvalitetsregler som står i konflikt med varandra så är dessa extra intressanta.

## Kapitel 2 - Meaningful Names
Tänkt på att namnge så att radkommentarer inte behövs.

## Kapitel 3 - Functions
Corrector har bra namngivning - is för boolean, verb för andra metoder
- svårt att ha loopar korta - jag tycker att den gör en sak - jag ser inte poängen i dessa fall (corrector.js)
- följer med Blocks and indenting (functions should be small) - tycker indenteringsnivå 1-2 OK. försökt hållt mig till det i mina loopar, men tillåter dom att utföra uppgifter som är längre en en rad (gärna ett metodanrop) - då detta i vissa fall skulle göra att om jag bryter ut funktionaliteten i for loopen till en egen metod hade den eventuellt behövt fler parametrar, vilket också diskuteras hur en metod som inte är monodiac ska eftertänkas. (exempel de två for looparna i corrector)

## Kapitel 4 - Comments
- Har dom bara till publika metoder i model - de som innehåller logik som inte är appspecifik utan egentligen kan återanvändas.

"Function Headers
Short functions don’t need much description. A well-chosen name for a small function that does one thing is usually better than a comment header."

"Don’t Use a Comment When You Can Use a Function or a Variable:
Consider the following stretch of code:
// does the module from the global list <mod> depend on the
// subsystem we are part of?
if (smodule.getDependSubsystems().contains(subSysMod.getSubSystem()))
This could be rephrased without the comment as
ArrayList moduleDependees = smodule.getDependSubsystems(); String ourSubSystem = subSysMod.getSubSystem();
if (moduleDependees.contains(ourSubSystem))
The author of the original code may have written the comment first (unlikely) and then written the code to fulfill the comment. However, the author should then have refactored the code, as I did, so that the comment could be removed."
- in corrector getCorrectAnswer och extractTimesTAble 

- Noise comments:
"Noise Comments
Sometimes you see comments that are nothing but noise. They restate the obvious and provide no new information.
/**
* Default constructor. */
protected AnnualDateRule() { }
No, really? Or how about this:
/** The day of the month. */
private int dayOfMonth;
And then there’s this paragon of redundancy:
/**
* Returns the day of the month. *
* @return the day of the month. */
public int getDayOfMonth() { return dayOfMonth;
}"

- angående JSDOC
"Mandated Comments
It is just plain silly to have a rule that says that every function must have a javadoc, or every variable must have a comment. Comments like this just clutter up the code, propa- gate lies, and lend to general confusion and disorganization.
For example, required javadocs for every function lead to abominations such as List- ing 4-3. This clutter adds nothing and serves only to obfuscate the code and create the potential for lies and misdirection."

- Redundant - medlemsvariabler i onödan


- Javadocs in Public APIs - I min modul!
There is nothing quite so helpful and satisfying as a well-described public API. The java- docs for the standard Java library are a case in point. It would be difficult, at best, to write Java programs without them.
If you are writing a public API, then you should certainly write good javadocs for it. But keep in mind the rest of the advice in this chapter. Javadocs can be just as misleading, nonlocal, and dishonest as any other kind of comment.

- Explanation of Intent
med corrector isCorrect förstår vi att det är en boolean - vi behöver ingen kommentar, går hand i hand med naming.
## Kapitel 5 - Formatting
MathGame - inte möjligt att göra varje metodanrop i rad - däremot i controllern möjligt!
- dependent functions: caller above callee : fint i app.js
Indentering:

- en vana, indentering spelar roll - ett sätt att kommunicera - följ standarden - play by the team rules.
- följer med Blocks and indenting (functions should be small) - tycker indenteringsnivå 1-2 OK.

## Kapitel 6 - Objects and Data Structures
Corrector är en klass som inte har några privata fält utan enbart erbjuder metoder för rättning av mattetal. 

## Kapitel 7 - Error Handling
Min start metod har en try catch och fångar respektive fel som kastas när applikationen körs. Jag har även try catch i mina event listeners eftersom dessa fångar fel som skulle kunna uppstå vid inputs som blir asynkrona.

## Kapitel 8 - Boundaries
- graph.js är den enda klassen som använder min modul, extern kod, eftersom denna är isolerad till denna klassen och är klassens enda uppgift så är det lättare för oss att underhåller vår egen kod, eftersom vi vet precis vart tredjepartskoden är.

## Kapitel 9 - Unit Tests
- One assert per test

## Kapitel 10 - Classes
RadioInput har flera metoder som inte använder privat fält - ändå väljer jag att behålla dessa metoder inom samma klass då jag tycker ätt det är enhetligt och high cohesion då dom har liknande avsikter och hör ihop.
Output också!
- Small! SRP 

## Kapitel 11 - Systems
