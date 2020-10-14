import express from "express";
const routes = express.Router();

import OrphanagesController from "./controllers/OrphanagesController";

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", OrphanagesController.create);

export default routes;
