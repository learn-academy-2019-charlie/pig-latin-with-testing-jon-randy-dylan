let testString = "Whale Yes Squeal Sequel Apple Fry"


const firstVowel = (str) => {
    let firstVowelLoc = 25
    for (let i = 0; i < str.length; i++){
        if(str.indexOf("a") < firstVowelLoc && str.indexOf("a") !== -1){
            if (str.includes("a")){
                firstVowelLoc = str.indexOf("a")
            }
        }else if (str.indexOf("e") < firstVowelLoc && str.indexOf("e") !== -1){
            if (str.includes("e")){
                firstVowelLoc = str.indexOf("e")
            }
        }else if (str.indexOf("i") < firstVowelLoc && str.indexOf("i") !== -1){
            if (str.includes("i")){
                firstVowelLoc = str.indexOf("i")
            }
        }else if (str.indexOf("o") < firstVowelLoc && str.indexOf("o") !== -1){
            if (str.includes("o")){
                firstVowelLoc = str.indexOf("o")
            }
        }else if (str.indexOf("u") < firstVowelLoc && str.indexOf("u") !== -1){
            if (str.includes("u")){
                firstVowelLoc = str.indexOf("u")
            }
        }
    }
    return firstVowelLoc
}

const function2 = (str) => {
    return str + "way"
}

// describe("function2", () => {
//     test("returns word that starts with vowel plus way", () => {
//         expect(function2("apple")).toBe("appleway")
//         expect(function2("orange")).toBe("orangeway")
//         expect(function2("underwear")).toBe("underwearway")
//     })
// })
const function3 = (str) => {
    return str.substr(firstVowel(str)) + str.substr(0, firstVowel(str)) + "ay"
}

// describe("function3", () => {
//     test("returns word that starts with consonant plus ay", () => {
//         expect(function3("whale")).toBe("alewhay")
//         expect(function3("sequel")).toBe("equelsay")
//         expect(function3("tree")).toBe("eetray")
//     })
// })

const function4 = (str) => {
    let searchTerm = "qu"
    return str.substr(str.indexOf(searchTerm) + 2) + str.substr(0, str.indexOf(searchTerm) + 2) + "ay"
}

// describe("function4", () => {
//     test("qu test", () => {
//         expect(function4("question")).toBe("estionquay")
//         expect(function4("squeal")).toBe("ealsquay")
//         expect(function4("quinoa")).toBe("inoaquay")
//     })
// })

function buttonClick(){
    let userInput = document.getElementById("user-input").value
    document.getElementById("user-output").innerHTML = pigLatin(userInput)
}

const pigLatin = (str) => {
    var translate = str.toLowerCase().split(" ")
    const vowels = ["a","e","i","o","u"]
    var finalArr = []
    for (let i = 0; i < translate.length; i++){
        if(!translate[i].includes("a") && !translate[i].includes("e") && !translate[i].includes("i") && !translate[i].includes("o") && !translate[i].includes("u")){
            finalArr.push(translate[i].substr(translate[i].indexOf("y")) + translate[i].substr(0, translate[i].indexOf("y")) + "ay")
        } else if(vowels.includes(translate[i].charAt(0))){
            finalArr.push(function2(translate[i]))
        } else if(!translate[i].includes("qu")){
            finalArr.push(function3(translate[i]))
        } else if(translate[i].indexOf("qu") < firstVowel(translate[i])){
            finalArr.push(function4(translate[i]))
        } else {
            finalArr.push(function3(translate[i]))
        }
    }
    return finalArr.join(" ")
}

function playSound () {
    document.getElementById('play').play();
}

// describe("pigLatin", () => {
//     test("Final Test", () => {
//         expect(pigLatin("eye")).toBe("eyeway")
//         expect(pigLatin("throw")).toBe("owthray")
//         expect(pigLatin("quiet")).toBe("ietquay")
//         expect(pigLatin("squeal")).toBe("ealsquay")
//         expect(pigLatin("yummy")).toBe("ummyyay")
//         expect(pigLatin("fry")).toBe("yfray")
//         expect(pigLatin("rhythm")).toBe("ythmrhay")
//     })
// })

// console.log(pigLatin(testString));
