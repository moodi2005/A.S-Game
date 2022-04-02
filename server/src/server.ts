import { Application,Router,Context,send } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import {info,error} from "https://deno.land/std@0.133.0/log/mod.ts";


const app = new Application();

const router = new Router();

// serve Page
router.get("/",async (ctx:Context)=>{
    try {
        ctx.response.status = 200;
        await ctx.send({
          root: `${Deno.cwd()}/../../`,
          index: "index.html",
        });
      } catch(err){
        error(err)
      }
});
// serve Worlds
router.get("/get/words",async (ctx:Context)=>{
    try {
      ctx.response.status = 200;
        await ctx.send({
          root: `${Deno.cwd()}/../db`,
          index: "db.json",
        });
      } catch(err){
        error(err)
      }
});



app.use(router.routes());
app.use(router.allowedMethods());

info("Server is Runnig on http://localhost:8000")
await app.listen({ port: 8000 });