const postSample1 = (req,res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
}

const getSample1 = (req, res) => {
    res.send(
    JSON.stringify({
    id: req.query.id,
    message: "メッセージを取得します",
    }),
  )
}

const putSample1 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
}

const deleteSample1 = (req, res) => {
    res.send(JSON.stringify({ status: "success", id: req.query.id }))
}

const getPathParamSample1 = (req, res) => {
    res.send(
    JSON.stringify({
    id: req.params.id,
    message: "メッセージを取得します",
    }),
  )
}

const getkadai = (req,res) => {
    res.send(
        JSON.stringify({
           code:req.query.code,
           name:"情報太郎",
        })
    )
}

const postkadai = (req,res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            status:"OK",
            postcode:req.query.postcode,
        })
    )
}

const putkadai = (req,res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            status:"OK",
            postcode:req.body.postcode,
        })
    )
}

const deletekadai = (req,res) => {
    res.send(
        JSON.stringify({
            status:"OK",
            code:req.query.code,
        })
    )
}

export const q8_1Controller = {
    getkadai,
    postkadai,
    putkadai,
    deletekadai
}

