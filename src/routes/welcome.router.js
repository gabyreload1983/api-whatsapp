import { Router } from "express";
import { getTextMessageInput, sendMessage } from "../axiosFunc.js";

const router = Router();

router.post("/", function (req, res, next) {
  console.log("POST");
  const menu = `
  *Sinaspsis SRL*
  *Elegi una opcion:*
  1. Ventas
  2. Taller
  3. Asistencia remota
  4. Habalar con alguien
  `;
  const data = getTextMessageInput(process.env.RECIPIENT_WAID, menu);
  console.log("data", data);

  sendMessage(data)
    .then(function (response) {
      console.log("res", response);
      res.sendStatus(200);
      return;
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response.data);
      res.sendStatus(500);
      return;
    });
});

export default router;
