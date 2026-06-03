# GymTrack — TPF Projekt 2

Mobilna aplikacja webowa w React + Vite przygotowana na podstawie prototypów GymTrack. Projekt odwzorowuje cztery główne ekrany z makiety mobilnej:

- Dashboard
- Treningi
- Analiza / Statystyki
- Profil / Ustawienia

Dodatkowo dodano ekran logowania, chronione trasy oraz fallback 404, zgodnie z checklistą projektową.

## Uruchomienie

```bash
npm install
npm run dev
```

## Routing

- `/login`
- `/dashboard`
- `/treningi`
- `/analiza`
- `/profil`
- `*` → 404

## Logowanie

Aplikacja obsługuje dwa tryby logowania:

1. **Firebase Authentication** — po dodaniu zmiennych środowiskowych.
2. **Tryb demo** — działa od razu bez konfiguracji.

Dane demo:

- email: `demo@gymtrack.pl`
- hasło: `demo1234`

### Konfiguracja Firebase

Utwórz plik `.env` i dodaj:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
```

## Hotjar i Google Analytics

W projekcie są przygotowane integracje aktywowane przez zmienne środowiskowe:

```env
VITE_HOTJAR_ID=123456
VITE_HOTJAR_VERSION=6
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Bez tych wartości aplikacja działa normalnie, ale analityka nie jest inicjalizowana.

## Struktura

- `src/pages` — główne widoki routingu
- `src/components` — reużywalne komponenty UI
- `src/context` — kontekst autoryzacji
- `src/services` — integracja Firebase
- `src/styles` — style globalne

## Uwagi

Projekt jest stylowany tak, aby zachować charakter dostarczonych widoków mobilnych: ciemne tło, akcenty w kolorach meadow green / blue, dolna nawigacja i karty danych.
