# Warsztat infoShare Academy z podstaw JavaScriptu - Lublin 24-02-2018

## Informacje po warsztacie

Na branchy `oop` znajduje się przerobiona gra wykorzystująca podejście obiektowe i JavaScriptowe portotypy.
Jak zmieniać baranche i poznać lepiej GITa zobaczcie tutaj:
https://www.youtube.com/watch?v=SWYqp7iY_Tc
i tutaj:
https://try.github.io/levels/1/challenges/1

W kodzie są komentarze.

W efekcie jesteśmy w stanie załączyć pliki gry do dowolnej storny, wskazać kontener (np. div) w którym gra ma się pojawić i bedize działać.

Przykładowo - dwie niezaleźnie działające gry, korzystające oczywiście z tego samego kodu - http://warsztat-24-02-18-oop.surge.sh

Koniecznie przejrzyjcie kod - miłej zabawy :)
Mateusz Choma

## Program warsztatu

- wstęp do systemów kontroli wersji i historia GIT
    - podstawowe operacje:
        - clone z istniejącego repozytorium (terminal)
        - commmit (poprzez VS Code)
        - pull (poprzez VS Code)
        - push (poprzez VS Code)
        - różnice pomiędzy commitem a branchą (branch - wskaźnik na commicie, karteczki + flipchart)
        - śledzenie historii zmian (log w konsoli i w VS Code dodatek GIT History)
    - Użycie GITa przy kolaboracji (wyłącznie krótkie omówienie możliwości)
        - gitignore 
        - branche
        - merge
        - zdalne repozytoria,  synchronizacja zmian i konflikty
- Wstęp do JS:
    - typy i zmienne
    - proste operacje matematyczne
    - tablice i obiekty
    - object literal - właściwości i odnoszenie się do nich
    - funkcje (jako reużywalne kawałki kodu, do których wkładamy argumenty - bez szczegółów)
    - wykonywanie kodu cyklicznie - setInterval
    - event onclick
- Tworzenie gry typu Whac-A-Mole (losowo pojawiające się elementy HTML na całej planszy ze zdarzeniem - onclick nabijającym punkty):
    - tworzenie obiektu HTML w JS
    - losowe umieszczanie go na ekranie
    - przypięcie on click
    - dodanie klas i stylów CSS do całości dostarczonych przez nas
- Tworzenie gry:
    - stworzenie/dołączenie gotowej planszy do gry z licznikiem czasu i punktów
    - defniowanie właściwości kreta i zdarzenia onclick
    - obudowanie funkcji w funkcję gry zliczającą punkty i odliczająca czas
- (*) Podstawy “obiektowości”:
    - wprowadzenie this
    - funkcja zwracająca obiekt z właściwościami definiowanymi poprzez atrybuty z jakimi została wywołana
    - funkcja tworząca obiekt - kreta
    - funkcja tworząca obiekt - grę
    - zamiana całości kodu na obiekty + prototypy
- (**) Dla ambitniejszych:
    - levele (szybciej po osiągnięciu określonego wyniku)
    - dodanie wielu kretów na raz na losowy czas
