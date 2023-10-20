# Testspecifikation och testplan
## Vad kommer testas och hur?
* Applikationen kommer testas manuellt via dess gränssnitt.
* Applikationen kommer testas i driftsatt miljö [här](https://times-tables-test.netlify.app/)
* Testmiljö, webbläsare: Chrome 117

## Testfall

### UC1 - Interaktivitet
#### TC1.1 - 
* Krav: 1.1, 1.2, 2.1
* Steg:
1. Klicka på start
2. Du ska presenteras för olika alternativ för antal frågor
3. Klicka på alternativ 1
4. Ett matteproblem visas
#### TC1.2 - 
* Krav: 1.1, 1.2
* Steg:
1. När du presenterats för första frågan, skriv in ditt svar
2. Klicka på 'Answer' eller klicka på enter
3. Du ska presenteras för ett nytt matteproblem

### UC2 - Anpassningsbarhet
#### TC2.1 - Val av antal frågor per multiplikationstabell
* Krav: 2.1
* Steg:
1. Klicka på start
2. Klicka på alternativ 1 som representerar siffran 2
3. Ett matteproblem visas med 1 som första operand
4. Skicka in ditt svar
5. Ytterligare ett matteproblem visas med 1 som första operand
6. Skicka in ditt svar
7. Ett matteproblem visas med 2 som första operand
#### TC2.2 - Val av antal frågor per multiplikationstabell
* Krav: 2.1
* Steg:
1. Klicka på start
2. Klicka på alternativ 3 som representerar siffran 9
3. Ett matteproblem visas med 1 som första operand
4. Skicka in ditt svar
5. Repetera steg 3 och steg 4 åtta gånger
6. Ett matteproblem visas med 2 som första operand

### UC3 - Resultat
#### TC3.1
* Krav: 3.1
* Steg:
1. Klicka på start
2. Klicka på alternativ 1 som representerar siffran 2
3. Besvara varje matteproblem som visas
4. När mattetalen inte visas längre döljs svarsfältet
5. Kontrollera att en text med ditt resultat visas
6. Kontrollera att appen har genererat en graf med ditt resultat
#### TC3.2
* Krav: 3.1, 3.2
* Steg:
1. Starta ett test med 2 problem per tabell
2. Svara korrekt på de 2 första mattetalen som visas genom att skriva in operand nummer 2 (Eftersom det är ettans multiplikationstabell är svaret för exempelvis 1 * 8 alltid 8)
3. När den första operanden inte längre är 1 - Svara med 0
4. Repetera steg 3 tills resultatvyn visas
5. Kontrollera att grafen visar en stapel för tabell 1 som når upp till y-axel värde 2
6. Kontrollera att staplar för resterande tabeller befinner sig i botten av diagrammet, alltså inte når upp till 1
7. Kontrollera att ditt totala antal korrekta svar visas 
8. Kontrollera att diagrammet visar antalet möjliga korrekta svar per tabell
9. Kontrollera att diagrammet visar antalet möjliga korrekta svar totalt

### UC4 - Gränssnitt
#### TC4.1
* Krav: 4.1
* Steg:
1. Kontrollera att applikationens första sida innehåller en startknapp 
2. Kontrollera att knappen nämnd ovan är den enda knappen.
3. Klicka på startknappen
4. Kontrollera att du har en ny vy och istället en Go Back-knapp
#### TC4.2
* Krav: 4.1, 4.2
* Steg:
1. Klicka på start
2. Klicka på alternativ 1 som representerar siffran 2
3. Besvara varje matteproblem som visas
4. När mattetalen upphört visas resultatvyn
5. Kontrollera att du har två synliga knappar - Try Again och Go Back
