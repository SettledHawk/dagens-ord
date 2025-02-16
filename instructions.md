## Cursor.AI Instruksjoner for Dagens Ord

### Teknologistack
Du er en ekspertutvikler med ferdigheter i **Next.js, TypeScript, React, ShadCN, Lucide-react, Framer Motion og V0**. Du utvikler en nettside som viser et nytt ord hver dag kl. 00:00 norsk tid, med tilhørende informasjon og admin-side for CRUD-operasjoner.

## Kodestruktur og Beste Praksis
- **Skriv modulær og gjenbrukbar TypeScript-kode** med tydelige og presise eksempler.
- Følg **Next.js sin mappestruktur**, med `app/` for page routing og `components/` for UI-komponenter.
- Bruk **functional programming** og unngå klasser der det ikke er nødvendig.
- **Foretrekk named exports** fremfor default exports.
- Bruk **beskrivende variabelnavn** med hjelpeverb (f.eks. `isLoading`, `hasError`).
- Strukturér filer med separate mapper for **komponenter, hjelpefunksjoner og statisk innhold**.

## TypeScript og Zod
- Bruk **TypeScript** i all kode.
- Bruk både **interfaces og type aliases** der det gir mest mening.
- Valider all inngående data med **Zod** for å sikre robusthet.
- Unngå enums; bruk **literal types** eller **mappings** i stedet.
- Implementer funksjonelle komponenter med **TypeScript interfaces for props**, men vurder også type aliases for enkelhet der det passer.

## Syntaks og Formatering
- Bruk `function`-nøkkelordet for rene funksjoner, men arrow functions kan brukes der det gir bedre lesbarhet.
- Skriv **deklamativ JSX** for bedre lesbarhet.
- Unngå unødvendige `{}` i betingelser – bruk konsise syntaksvalg.

## UI og Styling
- Bruk **ShadCN** for alle UI-komponenter.
- Implementer **responsivt design** med en **mobile-first tilnærming**.
- Sørg for **konsistens i styling** mellom ulike UI-elementer.
- Bruk **Framer Motion** for å håndtere animasjoner der nødvendig.

## State Management og Datahenting
- Bruk **React Query eller SWR** for datahenting, caching og synkronisering.
- Bruk `useEffect` der det er nødvendig, men vurder alternative løsninger som **derived state og memoization** for å unngå unødvendige re-renders.
- Implementer optimistisk UI-oppdatering for en bedre brukeropplevelse.

## Feilhåndtering og Validering
- **Prioriter feilhåndtering** og edge cases.
- Bruk **early returns** for å unngå dype nestinger i kode.
- Implementer **guard clauses** for å håndtere preconditions og ugyldige tilstander tidlig.
- Bruk **custom error types** eller **fabrikker** for konsistent feilhåndtering.
- Loggfør feil og gi brukervennlige feilmeldinger.

## Ytelsesoptimalisering
- **Optimaliser for både desktop og mobil.**
- Bruk **dynamic imports** for å redusere bundle-størrelse i Next.js.
- Implementer **lazy loading** for ikke-kritiske komponenter.
- Optimaliser bilder ved å bruke **Next.js sin Image-komponent**.

## Pakkeadministrasjon
- Bruk **npm** for installasjon (`npm install`).
- Pakkene som brukes inkluderer:
  - `next`, `react`, `react-dom`
  - `shadcn` (installeres med `npm install shadcn`)
  - `lucide-react`, `framer-motion`, `zod`
  - **Andre relevante pakker** som React Query, Zustand osv.
- Cursor skal **sjekke utdaterte pakker** med `npm outdated` og foreslå oppdateringer.
- **Dependabot/GitHub Actions** brukes for automatiserte oppdateringer.

## Testing og Kodekvalitet
- Bruk **ESLint og Prettier** for formatering.
- Skriv **Jest**-tester og bruk **React Testing Library** for komponent-tester.
- Implementer **CI/CD i GitHub Actions** for å kjøre tester automatisk på pull requests.

## Hosting og Deployment
- Bruk **Railway for testing**, og en betalt hosting-løsning ved lansering.
- Bruk **Vercel** eller **Netlify** for enkel hosting av Next.js.
- Automatiser deploy med **GitHub Actions**.

Merk: ShadCN kan ikke lenger installeres ved å bruke shadcn-ui. Bruk npm install shadcn for korrekt installasjon.