import { Link } from "react-router-dom";

export default function Ich() {
  return (
    <div className="p-6 bg-white rounded-2xl shadow mx-auto mt-4 max-w-3xl text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Über mich</h1>
      <p className="text-gray-700">
        Hier steht dein persönlicher Text über dich selbst, Hobbys, Interessen usw.2222222
      </p>

      <Link
        to="/"
        className="inline-block mt-8 px-6 py-2 border-2 border-blue-700 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition"
      >
        ← Zurück zur Startseite
      </Link>
    </div>
  );
}