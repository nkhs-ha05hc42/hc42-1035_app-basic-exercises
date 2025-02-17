const createRecord = async (inputBody) => {
    const fetchResult = await fetch("http://localhost:3000/api/9-7", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(inputBody),
    })
    const responsce = await fetchResult.json()
    if (responsce.status !== "success") {
    throw new Error(responsce.status)
    }
    alert("登録が完了しました！")
    }
    const getFormData = () => {
    const inputFormElement = document.getElementById("input-form").elements
    const user_id = inputFormElement.user_id.value
    const year = parseInt(inputFormElement.year.value)
    const month = parseInt(inputFormElement.month.value)
    const day = parseInt(inputFormElement.day.value)
    const name = inputFormElement.name.value
    const score = parseInt(inputFormElement.score.value)
    if (!user_id) {
        throw new Error("ユーザーIDは必須です")
    }
    if (!year) {
        throw new Error("年は必須です")
    }
    if (!month) {
        throw new Error("月は必須です")
    }
    if (!day) {
        throw new Error("日は必須です")
    }
    if (!name) {
        throw new Error("名前は必須です")
    }
    if (!score) {
        throw new Error("スコアは必須です")
    }
    return {
        user_id,
        year,
        month,
        day,
        name,
        score
    }
    }
    const clearFormData = () => {
        const inputFormElement = document.getElementById("input-form").elements
        inputFormElement.user_id.value = ""
        inputFormElement.year.value = ""
        inputFormElement.month.value = ""
        inputFormElement.day.value = ""
        inputFormElement.name.value = ""
        inputFormElement.score.value = ""
    }
    
    window.onload = () => {
        const createButtonElement = document.getElementById("create-button")
        createButtonElement.addEventListener(
            "click",
            async () => {
                try {
                    const intutBody = getFormData()
                    await createRecord(intutBody)
                    clearFormData()
                } catch (err) {
                    alert(err)
                }
            },
            false,
        )
    }