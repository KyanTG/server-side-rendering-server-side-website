## Triple / Mediahuis

De opdracht was om voor Mediahuis een radiogids te maken, het ( doel ) was om 13 maart 2025 te zorgen dat 1 radiogids af was.

## Beschrijving

De website kan je gebruiken als radiogids om live uitzendingen te zien met daarbij de tijden en wie de uitzending host, als je hierop klikt kan je naar de live zender luisteren. ( Dit werkt momenteel nog niet maar dat is wel een doel voor de komende sprints ).
Ik heb een paar kleine design aanpassingen gedaan aan de Veronica pagina voor Mediahuis die ik heb gemaakt, zo heb ik er wat meer kleur aan toegevoegd om het wat creatiever en uitnodigender te maken. Ik heb tot nu toe een deel van het mobile first design af, dit kwam omdat ik moeite had met de juiste informatie uit de diverse databases te halen en deze te verwerken in 1 database.


# Mobile first:


https://github.com/user-attachments/assets/0f191097-3b4e-4688-bf1f-d2d0513e7157

## Kenmerken

# Liquid / HTML

Als eerst heb ik natuurlijk ervoor gezorgd dat mijn HTML Semantisch is ingericht en dat ik de juiste elementen heb gebruikt in mijn code. Ik heb daarna gebruik gemaakt van een % Loop zodat de Articles met de juiste data automatisch worden ingeladen en zovaak worden gerepeat zoals nodig is. Code Voorbeeld:

https://github.com/KyanTG/server-side-rendering-server-side-website/blob/8de233ed02c456e4bdedac13e0269540d483fab2/views/veronica.liquid#L66-L91

# CSS

In CSS heb ik er voor gezorgd dat alles op de volgorde van de HTML ingedeeld is en daarbij heb ik ervoor gezorgd dat alles netjes genest is zodat de code optimaal werkt en overzichtelijk blijft. Code voorbeeld:

https://github.com/KyanTG/server-side-rendering-server-side-website/blob/edd1eb889de30ed72115d457d603875d44348a1d/public/liquid.css#L147-L225

# Express / Javascript

In JS heb ik ervoor gezorgd dat de ( JSON ) database opgehaald kan worden en deze verwerkt kan worden in liquid, ook heb ik via hier de verschillende get en post routes aangemaakt zodat er verschillende paginas zijn. Code voorbeeld:

https://github.com/KyanTG/server-side-rendering-server-side-website/blob/edd1eb889de30ed72115d457d603875d44348a1d/server.js#L45-L57

https://github.com/KyanTG/server-side-rendering-server-side-website/blob/edd1eb889de30ed72115d457d603875d44348a1d/server.js#L60-L73

De verschillende app gets en response render zijn bedoeld om de verschillende pagina's aan te maken en naar door te linken



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
