export default function Projekte() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow mx-auto mt-4 max-w-3xl text-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Projekte</h1>
      <p className="text-gray-700">
        Hier findest du Informationen zu meinen Software- und Hardwareprojekten.
      </p>
      <ul className="mt-4 text-left list-disc list-inside text-gray-700">
        <li>Webentwicklung mit React & Tailwind CSS</li>
        <li>Vite-basierte Tools und Frontend-Komponenten</li>
        <li>Hardware-Integration mit Mikrocontrollern</li>
      </ul>
      <a href="/" className="text-blue-600 underline mt-4 block">← Zurück zur Startseite</a>
    </div>
  );
}