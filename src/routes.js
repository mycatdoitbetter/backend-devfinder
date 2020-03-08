import { Router } from "express";
import Devcontroller from "./controllers/DevController";
import Searchcontroller from "./controllers/SearchController";

const routes = Router();

routes.get("/devs", Devcontroller.index);
routes.post("/devs", Devcontroller.store);
routes.delete("/devs/:id", Devcontroller.destroy);

routes.get("/search", Searchcontroller.index);

export default routes;
