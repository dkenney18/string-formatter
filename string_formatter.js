class Register {
    constructor() {
        this.strings = []
        this.var_string = null
    }

    registerVariableString(variable, value) {
        this.strings.push({name: variable, value: value})
    }

    getVariableStrings() {
        return this.strings
    }
}

class StringFormatter {
    constructor() {
        this.templateString = ""
    }

    format(string, variableStrings) {
        for (let i = 0; i < variableStrings.length; i++) {
            const element = variableStrings[i];
            string = string.replace(element.name, element.value)
        }

        return string
    }

}

var register = new Register()
var formatter = new StringFormatter()

var age = {
    id:"{age}",
    value: 10
}

var money = {
    id:"{money}",
    value: 1000
}

var dob = {
    id:"{dob}",
    value: "10/04/1432"
}

var username = {
    id:"{username}",
    value: "samsmith1"
}

var password = {
    id:"{password}",
    value: "qwerty1234"
}

register.registerVariableString(age.id, age.value)
register.registerVariableString(money.id, money.value)
register.registerVariableString(dob.id, dob.value)
register.registerVariableString(username.id, username.value)
register.registerVariableString(password.id, password.value)

str1 = "you are {age} years old and have {money} in the bank"
str2 = "you were born on {dob}"
str3 = "your username is: {username} and your password is {password}"

var formattedString1 = formatter.format(str1, register.getVariableStrings())
var formattedString2 = formatter.format(str2, register.getVariableStrings())
var formattedString3 = formatter.format(str3, register.getVariableStrings())

console.log(formattedString1)
console.log(formattedString2)
console.log(formattedString3)




