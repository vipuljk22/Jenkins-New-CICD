exports.handler = async (event) => {
    let {firstName, lastName} = JSON.parse(event.body);
    console.log("Vipul Changes");
    return {
        statusCode: 200,
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            result: "Name : " + firstName + " " +lastName
        })
    }
}
