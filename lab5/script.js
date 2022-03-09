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
    var services = [
        {
            "service-name": "Washing",
            "price": 5
        },
        {
            "service-name": "Haircut",
            "price": 25
        },
        {
            "service-name": "Drying",
            "price": 5
        },
        {
            "service-name": "Perming",
            "price": 55
        },
        {
            "service-name": "Dying",
            "price": 65
        }
    ]

    var hairdressersDiv = $("#hairdressers")[0]
    var hairdresserSelection = $("#hairdresser-selection")[0]
    for (let hairdresser of hairdressers) {
        var card = $("<div></div>")
        card.addClass("card")
    
        var cardImg = $("<img>")
        cardImg.addClass("card-img-top h-50")
        cardImg.attr("src", "hairdresser-" + hairdresser.gender + ".jfif")
    
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

    // add services to the html
    for (let service of services) {
        // services
        var tr = $('<tr></tr>')
        var nameTd = $('<td></td>')
        nameTd.append(service["service-name"])
        var priceTd = $('<td></td>')
        priceTd.append(service.price + '$')
        tr.append(nameTd).append(priceTd)
        $('#services').children('table').children('tbody').append(tr)

        // servcies-selection
        var div = $('<div></div>')
        div.addClass('form-check-inline')
        $('#services-selection').append(div)

        var label = $('<label></label>')
        label.addClass('form-check-label')
        div.append(label)

        var input = $('<input>')
        input.attr({
            'type': 'checkbox',
            'name': 'service'
        })
        input.addClass('form-check-input')
        label.append(input)
        label.append(service["service-name"])
        console.log(service["service-name"])
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