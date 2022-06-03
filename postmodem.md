# Slutprojekt

Isac Danielsson , 2022-05-30

## Inledning
Syftet var att skapa ett projekt meeps/tasks liknande projekt som kombinerar både den delen samt login delen. Man ska kunna skapa ett konto och detta kontot ska sparas på en databas. När kontot är skapat och man har loggat in så ska man kunna se allas noots och man ska även kunna skriva och lägga upp egna noots. Nootsen som man lägger upp laddas upp och sparas på en databas, de ska även gå att ta bort, helst att man bara kan ta bort sina egna. Layouten och designen på sidan ska utgå ifrån en figma skiss som jag gjorde innan jag började koda.


Här beskriver du kortfattat arbetets syfte/mål, arbetssätt, genomförande.

## Bakgrund

Först och främst började jag med att göra en figma skiss, jag valde ett color scheme som jag tyckte passade till sidan och gjorde en layout på hur ungefär jag ville att sidan skulle se ut. Jag tog lite inspiration från facebook men jag gjorde en väldigt simpel version av den. Planen var att ha en navbar på toppen av sidan men en sidebar på noots-sidan. Det slutade med att jag hade en navbar på alla sidor eftersom jag hade lite ont om tid och fick andra problem jag behövde lösa. Designen var väldigt simpel men stilren. Sen var det dags att göra själva databasdelen. Jag behövde två stycken databas tables, en för noots och en annan för användare. Noots delen krävde en body, created_at och user_id. Users tablet hade username, password och en last_login. 

När databasdelen var klar så va det dags att koda back-end delen av projektet och få klart alla features innan jag började med front-end koden. Jag gjorde detta med en väldigt simpel front-end som jag tog från bootstrap. På noots-sidan behövdes 2 get routs, en för att visa alla noots och en för att kunna ta bort dem. Det behövdes även en post rout som används för att kunna ladda upp noots från sidan till databasen. Liknande på login-sidan där jag behövde en post rout som postar det man skriver och jämför det sedan med databasen för att bestämma om man får logga in eller inte. På sign up sidan behövdes också en post rout för att ens användarnamn och lösenord ska laddas upp på databasen. Det är viktigt att kryptera användarnas lösenord så att ingen kan kolla databasen för att se allas lösenord. Detta gjorde jag med hjälp av bcrypt. När back-end delen var klar började jag med front-end delen. 

Jag började med landing-pagen som bara skulle vara en stor knapp och text, knappen skulle ta en till inloggningssidan. Inloggningssidan såg ut som en vanlig inloggningssida som tillät användaren att skriva in lösenord, användarnamn eller att gå till signup-sidan om man inte har ett konto. Sen själva "noots-sidan" gjorde jag en input där man skrev in sin noot och cards som visade upp nooten man laddade upp och även andra användares noots. När alla sidor var klar så gjorde jag även en navbar till alla sidor. Navbaren innehöll enbart en logotyp och signin,signup/signout knappar beroende på om man är inloggad eller inte. 

Jag använde mig av sass/scss eftersom jag kan lätt strukturera koden och olika scss filer för olika delar av arbetet. Jag gjorde detta med import verktygen som gör så att jag kan importera alla scss filer på en fil som används av sidan. Några delar av sidan är dock gjorde med bootstrap, detta är inte optimalt och det var inte heller planerat men på grund av tidsbrist kände jag att det var nödvändigt för vissa saker. 

När jag kände att sidan var klar i helhet (med bara några småsaker som behövs fixas) så gick jag igenom Jens checklista. Hemsidan provades på två olika webbläsare samt på telefon, den fungerade i båda det var bara en knapp som såg konstig ut på telefon om man hade en väldigt smal telefon. Jag validerade alla mina nunjucksfiler och även scss filer, de uppstod några problem men de fixade jag. 





Redovisa arbetets olika delar. Så att läsaren förstår vad du gjort och hur.

Använd gärna bilder för att illustrera.

För att lägga till bilder i markdown. Bilderna kan du ladda upp med Git som vanligt, länka dem med url eller filnamnet.

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)


![NTI Gymnasiet Umeå Logo](https://raw.githubusercontent.com/jensnti/Webbprojekt/master/mallar/nti_logo_white_umea.svg)

## Positiva erfarenheter

Här beskriver du vad som har gått bra i ditt projekt och analyserar varför. Hur ska du upprepa framgångarna.

## Negativa erfarenheter

Här beskriver du det som du anser har gått mindre bra med ditt projekt och analyserar hur du kan undvika detta i framtida projekt.

## Sammanfattning

Här redovisar du dina slutsatser, erfarenheter och lärdomar. Reflektera över din produkt och dess/dina utvecklingsmöjligheter.
Vad kan vidareutvecklas och finns det utrymme att bygga vidare på projektet.