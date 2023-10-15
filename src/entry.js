import { Router, view } from "leanweb-kit/runtime";

const app = new Router();

app.get("/", (_) => view(_, "home"));
app.get("/about", (_) => view(_, "about"));

export default app;
