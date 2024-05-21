var vehicles = []
var categorys = []
var currentCategory
var currentVehicle = 0
var currentVehicles = []
var maxVehicles = 0
var realCurrentVehicle = 0

$(function () {
    $.post(`https://${GetParentResourceName()}/ready`, JSON.stringify({}))

    window.addEventListener("message", function (event) {
        if (event.data.action == 'show') {
            if (event.data.testDrive) {
                $("#testDrive").show()
            } else {
                $("#testDrive").hide()
            }

            $('.main__cardealer-container').fadeIn()

            categorys = event.data.categorys
            vehicles = event.data.vehicles

            currentCategory = categorys[0].name
            currentVehicle = 0
            maxVehicles = 0
            currentVehicles = []
            realCurrentVehicle = 0

            $("#categoryName").text(categorys[0].label)

            $.post(`https://${GetParentResourceName()}/spawnVehicle`, JSON.stringify({
                model: vehicles[0].name
            }))

            $(".main__cardealer-right-category-scroll-container").empty()

            for (var i = 0; i < categorys.length; i++) {
                $(".main__cardealer-right-category-scroll-container").append(`
                    <div class="main__cardealer-right-category-scroll-item" data-category-name="${categorys[i].name}", data-category-label="${categorys[i].label}">
                        <p>${categorys[i].label}</p>

                        <div class="main__cardealer-corner">
                            <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="main__cardealer-corner-left">
                                <rect width="4.2043" height="4" fill="var(--clr-primary)" />
                            </svg>
                            <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="main__cardealer-corner-right">
                                <rect width="4.2043" height="4" fill="var(--clr-primary)" />
                            </svg>
                        </div>
                    </div>
                `)
            }

            for (var i = 0; i < vehicles.length; i++) {
                var vehicle = vehicles[i];

                if (vehicle.category == currentCategory) {
                    currentVehicles.push({
                        name: vehicle.name,
                        label: vehicle.label,
                        category: vehicle.category,
                        price: vehicle.price
                    })

                    maxVehicles += +1
                }
            }

            currentVehicle += +1

            $("#vehiclePrice").text(new Intl.NumberFormat('de-DE').format(currentVehicles[realCurrentVehicle].price) + " $")
            $("#vehicleName").text(currentVehicles[realCurrentVehicle].label)
            $("#vehicleCount").text(currentVehicle + ' / ' + maxVehicles)
        }
    })

    $("#buttonLeft").click(function () {
        if (currentVehicle <= 1) {
            return
        }

        realCurrentVehicle -= 1
        currentVehicle -= 1

        $("#vehiclePrice").text(new Intl.NumberFormat('de-DE').format(currentVehicles[realCurrentVehicle].price) + " $")
        $("#vehicleName").text(currentVehicles[realCurrentVehicle].label)
        $("#vehicleCount").text(currentVehicle + ' / ' + maxVehicles)

        $.post(`https://${GetParentResourceName()}/spawnVehicle`, JSON.stringify({
            model: currentVehicles[realCurrentVehicle].name
        }))
    })

    $("#buttonRight").click(function () {
        if (currentVehicle >= maxVehicles) {
            return
        }

        realCurrentVehicle += +1

        currentVehicle += +1

        $("#vehiclePrice").text(new Intl.NumberFormat('de-DE').format(currentVehicles[realCurrentVehicle].price) + " $")
        $("#vehicleName").text(currentVehicles[realCurrentVehicle].label)
        $("#vehicleCount").text(currentVehicle + ' / ' + maxVehicles)

        $.post(`https://${GetParentResourceName()}/spawnVehicle`, JSON.stringify({
            model: currentVehicles[realCurrentVehicle].name
        }))
    })

    window.addEventListener("keyup", function (event) {
        if (event.key == "Escape") {
            $('.main__cardealer-container').fadeOut()
            $.post(`https://${GetParentResourceName()}/exit`, JSON.stringify({}))
        }
    })

    $("#testVehicle").click(function () {
        $('.main__cardealer-container').fadeOut()

        $.post(`https://${GetParentResourceName()}/testVehicle`, JSON.stringify({
            model: currentVehicles[realCurrentVehicle].name
        }))
    })

    $("#buyVehicle").click(function () {
        $('.main__cardealer-container').fadeOut()

        $.post(`https://${GetParentResourceName()}/buyVehicle`, JSON.stringify({
            model: currentVehicles[realCurrentVehicle].name,
            category: currentCategory
        }))
    })

    $("#closeVehicle").click(function () {
        $('.main__cardealer-container').fadeOut()

        $.post(`https://${GetParentResourceName()}/exit`, JSON.stringify({}))
    })

    $(".main__cardealer-color").click(function () {
        const css = $(this).css('background-color')
        const rgb = css.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',')

        $.post(`https://${GetParentResourceName()}/vehicleColor`, JSON.stringify({
            r: parseInt(rgb[0]),
            g: parseInt(rgb[1]),
            b: parseInt(rgb[2])
        }))
    })
})

$(document).on("click", ".main__cardealer-right-category-scroll-item", function () {
    var category = $(this).attr('data-category-name')
    var categoryLabel = $(this).attr('data-category-label')

    currentCategory = category
    currentVehicle = 0
    maxVehicles = 0
    realCurrentVehicle = 0
    currentVehicles = []

    $("#categoryName").text(categoryLabel)

    for (var i = 0; i < vehicles.length; i++) {
        var vehicle = vehicles[i];

        if (vehicle.category == currentCategory) {
            currentVehicles.push({
                name: vehicle.name,
                label: vehicle.label,
                category: vehicle.category,
                price: vehicle.price
            })

            maxVehicles += +1
        }
    }

    currentVehicle += +1

    $("#vehiclePrice").text(new Intl.NumberFormat('de-DE').format(currentVehicles[realCurrentVehicle].price) + " $")
    $("#vehicleName").text(currentVehicles[realCurrentVehicle].label)
    $("#vehicleCount").text(currentVehicle + ' / ' + maxVehicles)

    $.post(`https://${GetParentResourceName()}/spawnVehicle`, JSON.stringify({
        model: currentVehicles[realCurrentVehicle].name
    }))
})

let down = false

$(document).mousedown(function (event) {
    if (!down && event.which == 1) {
        down = true
        $.post(`https://${GetParentResourceName()}/mousedown`, JSON.stringify({}))
    }
})

$(document).mouseup(function (event) {
    if (down && event.which == 1) {
        $.post(`https://${GetParentResourceName()}/mouseup`, JSON.stringify({}))
        down = false
    }
})

$(window).on('mousewheel', function (event) {
    $.post(`https://${GetParentResourceName()}/` + (event.originalEvent.wheelDelta < 0 ? 'downscroll' : 'upscroll'), JSON.stringify({}))
})