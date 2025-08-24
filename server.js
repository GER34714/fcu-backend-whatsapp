import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Lista de números que van a rotar
const whatsappNumbers = [
  "541132525913", // Martín
  "541171334027", // Lucas
  "541156349123", // Cami
  "541173566830", // Octavio
  "541125127839", // Facu
  "541123365501"  // Extra
];

let currentIndex = 0;

app.get("/api/whatsapp", (req, res) => {
  const number = whatsappNumbers[currentIndex];
  currentIndex = (currentIndex + 1) % whatsappNumbers.length;

  const link = `https://wa.me/${number}?text=Hola%20me%20creas%20un%20usuario%3F`;
  res.json({ link });
});

app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en puerto ${PORT}`);
});
