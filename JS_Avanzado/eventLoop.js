setTimeout(()=> console.log("CallbacK"), 0)

console.log("Call  Stack")

Promise.resolve(
    console.log("Promise")
)
