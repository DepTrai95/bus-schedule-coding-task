### Busfahrplan Coding Task

**Zielsetzung:**
Erstelle eine React-Anwendung, die einen Busfahrplan für ein öffentliches Verkehrssystem anzeigt. Die Benutzer sollen den Fahrplan einsehen, ihn nach verschiedenen Routen filtern und Details zu jeder Haltestelle sehen können.

**Anforderungen:**

1. **Fahrplan Daten:**

   - Die Fahrplandaten werden über einen API Endpunkte bereitgestellt `/api/schedule`.

   Struktur:

   ```json
   [
     {
       "route": "Route A",
       "stops": [
         { "name": "Stop 1", "time": "09:00" },
         { "name": "Stop 2", "time": "09:15" }
         // ... weitere Haltestellen
       ]
     }
     // ... weitere Routen
   ]
   ```

2. **App Komponenten:**

   - Erstelle eine Komponente `Schedule` zur Anzeige des Busfahrplans.
   - Erstelle eine Komponente `Filter`, damit Benutzer den Zeitplan nach Routen filtern können.
   - Erstelle eine Komponente `StopDetails`, um Details zu einer Haltestelle anzuzeigen.

3. **Funktionsweise:**

   - Die Komponente `Schedule` sollte eine Liste von Routen und deren jeweiligen Haltestellen und Abfahrtszeiten anzeigen.
   - Die Komponente `Filter` sollte es den Nutzern ermöglichen, eine bestimmte Strecke auszuwählen und den Fahrplan entsprechend zu aktualisieren.
   - Wenn der Benutzer auf eine Haltestelle im Fahrplan klickt, wird die Komponente `StopDetails` geöffnet, die Anzeigt wann welche Route dort hält.

4. **Styling:**

   - Wende grundlegendes Styling an, um die App optisch ansprechend zu gestalten.
   - Stelle sicher, dass die Seite auf verschiedenen Bildschirmgrößen gut funktioniert.

5. **Bonus (Optional):**
   - Einführung einer Farbcodierung der Routen.
   - Animationen für eine flüssigere Benutzererfahrung.
   - Die App accessible machen.

**Kriterien für die Bewertung:**

- Struktur und Organisation des Codes.
- React-Komponentendesign und Zustandsverwaltung.
- Handhabung des asynchronen Datenladens.

**Hinweise:**

- Die Daten wurden zufällig erzeugt, auch wenn die Uhrzeiten nicht immer chronologisch sind, kann angenommen werden, dass diese richtig sortiert von der API zurückgegeben werden.
- Das Projekt ist ein NextJS Projekt, welches Server-Side-Rendering unterstützt, diese sind für die Aufgabe aber nicht von relevanz. Wenn du neue Komponenten anlegst für ein `use client` in der ersten Zeile ein, dann verhält sich die Komponente wie eine klassische React Komponente.
- Wenn du uns das Ergebnis schickst, achte darauf auch den ".git"-Ordner
  mitzuschicken, dafür aber "node_modules" und ".next" Ordner nicht.
- Bei Fragen schick gerne eine Mail an [arne.feil@swk.de](mailto:arne.feil@swk.de)
