import { q9_7model } from "./9-7model.mjs"

const GetAll9_7_1 = async (req, res) => {
    const result = await q9_7model.selectAll()
    res.send(JSON.stringify({
        status: "success",
        list: result
    }))
}

const GetOne9_7_2 = async (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.send(JSON.stringify({
            status: "error"
        }))
    }
    const result = await q9_7model.selectOne(id)
    if (!result) {
        return res.send(JSON.stringify({
            status: "not found"
        }))
    }
    res.send(JSON.stringify({
        status: "success",
        data: result
    }))
}

const Post9_7_3 = async (req, res) => {
    const user_id = req.body.user_id
    const year = req.body.year
    const month = req.body.month
    const day = req.body.day
    const name = req.body.name
    const score = req.body.score
    if (!user_id || !year || !month || !day || !name || !score){
        return res.send(JSON.stringify({
            status: "error"
        }))
    }
    const result = await q9_7model.insertOne(user_id, year, month, day, name, score)
    res.send(JSON.stringify({
        status: "success",
        data: result
    }))
}

const Put9_7_4 = async (req, res) => {
    const id = req.params.id
    const user_id = req.body.user_id
    const year = req.body.year
    const month = req.body.month
    const day = req.body.day
    const name = req.body.name
    const score = req.body.score
    if (!id || !user_id || !year || !month || !day || !name || !score){
        return res.send(JSON.stringify({
            status: "error"
        }))
    }
    const result = await q9_7model.updateOne(id, user_id, year, month, day, name, score)
    if (!result) {
        return res.send(JSON.stringify({
            status: "not found"
        }))        
    }
    res.send(JSON.stringify({
        status: "success",
        data: result
    }))
}

const Delete9_7_5 = async (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.send(JSON.stringify({
            status: "error"
        }))
    }
    const result = await q9_7model.deleteOne(id)
    if (!result) {
        return res.send(JSON.stringify({
            status: "not found"
        }))
    }
    res.send(JSON.stringify({
        status: "success",
        data: result
    }))
}

export const q9_7Controller = {
    GetAll9_7_1,
    GetOne9_7_2,
    Post9_7_3,
    Put9_7_4,
    Delete9_7_5
}