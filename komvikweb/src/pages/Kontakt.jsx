export default function Kontakt() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow mx-auto mt-4 max-w-3xl text-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Kontakt</h1>
      <p className="text-gray-700">
        Du kannst mich unter folgender Adresse erreichen:
      </p>
      <p className="mt-2">E-Mail: <a href="mailto:info@komvik.de" className="text-blue-600 underline">info@komvik.de</a></p>
      <p className="mt-2">Ort: Kaufbeuren, Deutschland</p>
      <a href="/" className="text-blue-600 underline mt-4 block">← Zurück zur Startseite</a>
    </div>
  );
}