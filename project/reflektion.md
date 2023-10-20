# Reflektion
## Kapitel 2 - Meaningful Names
Jag har varit noga med att vid vidare ändringar i min modul försöka hålla One Word Per Concept, vilket jag nämnt i tidigare reflektion som en detekterad brist. Jag håller med om att metoder som åstadkommer samma saker, menar samma saker, fungerar på likvärdiga sätt bör ha samma prefix (så som add, remove, clear etc) och jag insåg att det också var mycket tydligare för mig hur funktionaliteten hängde ihop när jag namngav på det sättet. Jag har tänkt mycket under utvecklingen av denna app på att ha så beskrivande och Intention-Reavealing namn på mina variabler och metoder som möjligt. Jag tycker detta hänger mycket ihop med kommentarer och det eventuella behovet av kommentarer. I bilden nedan visas en metod i corrector klassen som returnerar en boolean döpt till 'is...' - Vilket går i linje med One Word Per Concept eftersom det är etablerat att en is-metod returnerar en boolean. Jag tycker att parameternamnen och variabelnamnen hänger ihop fint, är intention-revealing och att jämföra userAnswer med correctAnswer tycker jag är ett bra exempel för lagom meaningful distinctions.
![screen-2](./img/screen-2.png)

## Kapitel 3 - Functions
I Clean Code kapitel 3 står det om hur våra metoder ska vara Small! och gärna inte ha en indentering som överstiger 1 eller 2 steg inåt. Jag har märkt under min implementering att jag gärna nästlar if satsatser och for loopar. Jag har i flera steg och omgångar gått in och brutit ut dessa för min app och min modul. Det beskrivs i 'Blocks and indenting' att innehållet i en for loop eller ifsats bör vara en rad och då antagligen ett metodanrop. I bilden nedan (från 'model/graph.js') har jag valt att behålla min metod som den är. Jag tycker att det är tydligt och enhetligt även om jag behövt överväga om det är bättre att minska antalet rader kod inom loopen (dock skulle det inte minska till en rad) för att göra ett metodanrop. Metoden är i sig ganska liten, och använder sig ganska tätt av en variabel som deklareras utanför for loopen men som behöver nås inom loopens scope. Vad som sker i loopen behöver också ha tillgång till det inskickade argumentet ('result'). Om jag skulle bryta ut det som är inom forloopen till ett endaste metodanrop skulle den metoden behöva ta in både samlingan av dataEntries samt ett resultat som argument, vilket skulle göra den metoden 'dyadic' vilket i sig finns massvis av exempel av i min kod, men här tycker jag det blir enhetligt med att metoden ändå är relativt kort och behöver sin deklarerade variabel och sin parameter.
![screen-3](./img/screen-3.png)

## Kapitel 4 - Comments
Jag har valt att till största del inte inkludera JSDoc i mitt projekt. Jag tycker att namngivningen och kommentarer går hand i hand och inser efter mycket omtanke med att välja intention revealing och distinktiva namn upplevde jag nästan varje kommentar som redundant. I mitt model package är många av filerna mindre specifika än vad controller och view filerna är, flera klasser är mer eller mindre återanvändbara och mer lösa - medans min vy är strängt kopplat till min HTML och dess id'n på diverse taggar. I min model har jag därför valt att använda JSDoc för mina publika metoder (Inte alla getters etc, då jag tyckte att det bara blev noise comments) - då jag själv som utvecklare tycker att det underlättare med JSDoc i min editor då jag genast förstår datatyp för respektive argument. Bilden nedan är från 'model/generator.js' och jag visar ett exempel på när jag tycker att kommentaren är nödvändig och tillför information. Boken beskriver hur Function Headers är onödiga om man har ett välvalt namn för en liten funktion som gör en sak (vilket är så den ska vara) - I mitt fall blev mina välvalda namn långa och komplicerade, men jag var tvungen att hitta en mellanväg för med kortare namn tyckte jag inte att namnen var beskrivande. Jag tycker att kommentarer är nödvändiga - där dom behövs. Jag tycker att den här behövs eftersom den hjälper mig att förstå. Och eftersom jag fastnade med att hitta passande ord för vad min metod gjorde.
![screen-4](./img/screen-4.png)

## Kapitel 5 - Formatting
Jag har försökt hålla en "vertical ordering" med mina beroende funktioner genom att ha 'Caller above callee' - inte möjligt att göra varje metodanrop i rad - däremot i controllern möjligt. I min modul var detta också svårt. Jag valde där att till stor del utgå ifrån 'conceptual affinity'. Jag valde att ha liknande metoder samlade vertikalt.
![screen-5](./img/screen5.png)

## Kapitel 6 - Objects and Data Structures
Jag följer law of demeter - alltså inga trainwrecks eller klasser som anropar klasser som dom inte känner. Angående datastrukturer tyckte jag det var intressant som pratades om under föreläsningen gällande Arrayer - hur elementen bör vara av samma typ samt av samma konceptuella typ. I min modul hade jag två medlemsvariabler, två olika arrayer - en döpt till xCollection och en tyill yCollection. För att hitta en specifik punkt krävdes att extrahera samma index ur respektive array. Jag gjorde om detta till en array som istället innehåller objekt med x och y properties - döpt dataEntries.
![screen-6](./img/screen6.png)

## Kapitel 7 - Error Handling
Min start metod har en try catch och fångar respektive fel som kastas när applikationen körs. Jag har även try catch i mina event listeners eftersom dessa fångar fel som skulle kunna uppstå medans applikationen körs, då dessa annars inte fångas eftersom den koden blir som asynkron. I applikationens övriga delar har jag validering som kastar Exceptions. Jag returnerar inte null. Jag tycker att det här går i linje med min tidigare uppfattning och erfarenhet.
![screen-7](./img/screen-7.png)

## Kapitel 8 - Boundaries
model/graph.js är den enda klassen som använder min modul, extern kod, eftersom denna är isolerad till denna klassen och är klassens enda uppgift så är det lättare för oss att underhåller vår egen kod, eftersom vi vet precis vart tredjepartskoden är.
![screen-8](./img/screen-8.png)

## Kapitel 9 - Unit Tests
Jag har inte skrivit några automatiska enhetstester och har därför svårt att reflektera över hur kapitlet påverkat mitt arbete. Jag kan väl säga att Clean Tests även är applicerbart och att tänka på oavsett om du skriver tester i kod eller med ord. Jag försökter att vara kortfattad och tydlig när jag skriver mina testfall. Jag försöker att de manuella kontrollerna ska vara mätbara, och fungera som om de returnerade en boolean - för att validera att ett test passerade eller inte.
![screen-9](./img/screen-9.png)

## Kapitel 10 - Classes
RadioInput har flera metoder som inte använder privat fält - ändå väljer jag att behålla dessa metoder inom samma klass då jag tycker ätt det är enhetligt och high cohesion då dom har liknande avsikter och hör ihop. Detta gäller även 'view/Output.js' också! Jag har valt att ha en egen klass för att skapa ett Canvas element för att följa single responsibility principles, där är ett tydligt exempel på en liten klass.
![screen-10](./img/screen-10.png)

## Kapitel 11 - Systems
Jag har svårt att greppa detta kapitel och hur jag ska relatera det till denna uppgift. Jag tolkar det som att det förespråkar Separation of Concerns och hur olika komponenter arbetar och fungerar tillsammans utan att känna till "the big picture" - att det är så mjukvara bör utvecklas. Kapitlet nämner ingenting om MVC specifikt men jag anser att det grundar sig i samma approach. Jag försöker att hålla low coupling genomgående, om jag bortser från controllern som blir ganska snurrig - samtidigt kan jag se controllern som lite utanför denna princip, då dens uppgift faktiskt är att vara lite mer av en dirigent i min uppfattning.
![screen-11](./img/screen-11.png)