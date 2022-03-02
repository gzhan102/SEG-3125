function validatePhone() {
    var a = document.getElementById("phone").value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

$(function() {
    var hairdressers = [
        {
            "name": "Tommy",
            "intro": "Tommy has been cutting hair for 10 years.",
            "gender": "male"
        },
        {
            "name": "Jack",
            "intro": "Jack has been cutting hair for 3 years.",
            "gender": "male"
        },
        {
            "name": "Lily",
            "intro": "Lily has been cutting hair for 6 years.",
            "gender": "female"
        },
        {
            "name": "Cathy",
            "intro": "Cathy has been cutting hair for 1 year.",
            "gender": "female"
        }
    ]

    var hairdressersDiv = $("#hairdressers")[0]
    var hairdresserSelection = $("#hairdresser-selection")[0]
    console.log(hairdresserSelection)
    for (let hairdresser of hairdressers) {
        var card = $("<div></div>")
        card.addClass("card")
    
        var cardImg = $("<img>")
        cardImg.addClass("card-img-top h-50")
        cardImg.attr("src", "images/hairdresser-" + hairdresser.gender + ".jfif")
    
        var cardBody = $("<div></div>")
        cardBody.addClass("card-body")
    
        var cardTitle = $("<h4></h4>")
        cardTitle.addClass("card-title")
        cardTitle.text(hairdresser.name)
    
        var cardIntro = $("<p></p>")
        cardIntro.text(hairdresser.intro)
    
        cardBody.append(cardTitle, cardIntro)
        card.append(cardImg, cardBody)
        hairdressersDiv.append(card[0])

        var option = $("<option></option>")
        option.text(hairdresser.name)
        option.attr("value", hairdresser.name)
        hairdresserSelection.append(option[0])
    }

    $("#phone").on("change", function() {
        console.log("test")
        if (!validatePhone()){
            $("#phone-errorMsg").text("Wrong phone number format: (xxx)-xxx-xxxx")
        }
        else {
            $("#phone-errorMsg").text("")
        }
    })
})