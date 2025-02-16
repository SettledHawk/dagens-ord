import Sidebar from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"

export default function InfoPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      <main className="flex-1 p-12 overflow-y-auto">
        <h1 className="text-6xl font-extrabold mb-16 text-center text-[#14161A]">Om Dagens Ord</h1>
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-8 space-y-8 bg-[#FFFFFF]">
            <section>
              <h2 className="text-2xl font-semibold text-[#14161A] mb-4">Hva er Dagens Ord?</h2>
              <p className="text-lg text-[#14161A] leading-relaxed">
                Dagens Ord er en nettside dedikert til å utforske og lære om det norske språket. Vi tilbyr daglige ord,
                detaljerte definisjoner, etymologi, og mer for å berike din forståelse og bruk av norsk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#14161A] mb-4">Hvordan fungerer det?</h2>
              <p className="text-lg text-[#14161A] leading-relaxed">
                Hver dag presenterer vi et nytt ord på forsiden. Du kan utforske tidligere ord, søke etter spesifikke
                ord, og dykke dypere inn i ordenes betydning, opprinnelse, og bruk. Vår omfattende database gir deg
                tilgang til et rikt utvalg av informasjon om hvert ord.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#14161A] mb-4">Vårt mål</h2>
              <p className="text-lg text-[#14161A] leading-relaxed">
                Målet med Dagens Ord er å fremme språklig bevissthet og berikelse. Vi ønsker å inspirere til en dypere
                forståelse og verdsettelse av det norske språket, både for morsmålsbrukere og de som lærer norsk som
                andrespråk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#14161A] mb-4">Kontakt oss</h2>
              <p className="text-lg text-[#14161A] leading-relaxed">
                Har du spørsmål, tilbakemeldinger eller forslag? Vi vil gjerne høre fra deg! Du kan nå oss på følgende
                måter:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-lg text-[#14161A]">
                <li>
                  E-post:{" "}
                  <a href="mailto:kontakt@ordbok.no" className="text-[#007AFF] hover:underline">
                    kontakt@ordbok.no
                  </a>
                </li>
                <li>
                  Twitter:{" "}
                  <a
                    href="https://twitter.com/ordbokno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007AFF] hover:underline"
                  >
                    @ordbokno
                  </a>
                </li>
                <li>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/ordbokno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007AFF] hover:underline"
                  >
                    Ordbok.no
                  </a>
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

