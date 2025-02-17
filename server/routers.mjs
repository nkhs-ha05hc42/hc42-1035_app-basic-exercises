import express from "express"
import path from "path"
import { sample1Controller } from "./api/controllers.mjs"

import{ q8_1Controller } from "./api/controllers.mjs"
import{ q8_2Controller } from "./api/controllers.mjs"
import { sample2Controller } from "./api/sample2/controller.mjs"

import {q9_7Controller} from "./api/controllers.mjs"

const routers = express.Router()

routers.post("/api/sample1", sample1Controller.postSample1)
routers.get("/api/sample1", sample1Controller.getSample1)
routers.put("/api/sample1", sample1Controller.putSample1)
routers.delete("/api/sample1", sample1Controller.deleteSample1)
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1)

routers.get("/api/8-1",q8_1Controller.getkadai)
routers.post("/api/8-1",q8_1Controller.postkadai)
routers.put("/api/8-1",q8_1Controller.putkadai)
routers.delete("/api/8-1",q8_1Controller.deletekadai)

routers.get("/api/8-2",q8_2Controller.getkadai)


routers.post("/api/sample2", sample2Controller.postSample2)
routers.get("/api/sample2/:id", sample2Controller.getOneSample2)
routers.get("/api/sample2", sample2Controller.getAllSample2)
routers.put("/api/sample2/:id", sample2Controller.putSample2)
routers.delete("/api/sample2/:id", sample2Controller.deleteSample2)

routers.get("/api/9-7",q9_7Controller.GetAll9_7_1)
routers.get("/api/9-7/:id",q9_7Controller.GetOne9_7_2)
routers.post("/api/9-7",q9_7Controller.Post9_7_3)
routers.put("/api/9-7/:id",q9_7Controller.Put9_7_4)
routers.delete("/api/9-7/:id",q9_7Controller.Delete9_7_5)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
