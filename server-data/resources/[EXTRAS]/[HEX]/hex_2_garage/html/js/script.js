$(function () {
    $.post(`https://${GetParentResourceName()}/ready`, JSON.stringify({}))

    let selection = 0
    let cooldownFav = 0
    let parkedIn = false
    let spawnCoords = undefined

    const setTime = () => {
        if (cooldownFav >= 0) {
            cooldownFav -= 1
        }

        setTimeout(setTime, 1000)
    }

    setTime()

    const addVehicle = (data) => {
        $(".main__garage-scroll-container").append(`
            <div class="main__garage-scroll-item" data-plate="${data.plate}" data-nickname="${data.nickname}">
                <div class="main__garage-scroll-item-main" id="showContainer-${data.id}" style="display: block;">
                    <div class="main__garage-scroll-item-top-header">
                        <i class="${data.fav ? "fas fa-star" : "far fa-star"} ${data.fav && 'active'}" id="favButton" data-plate="${data.plate}"></i>
                        <p>Favorite car</p>
                    </div>
                    <div class="main__garage-rename-icon" id="${data.id}">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.022995 28.1788L6.935 25.7668L2.43499 21.2668L0.022995 28.1788ZM2.971 20.2778L7.924 25.2308L24.924 8.23076L19.971 3.27776L2.971 20.2778ZM20.734 2.51476L25.687 7.46776L27.729 5.42576C28.36 4.79476 28.36 3.77176 27.729 3.14076C26.903 2.31476 25.887 1.29876 25.061 0.472762C24.43 -0.158238 23.407 -0.158238 22.776 0.472762L20.734 2.51476Z" fill="var(--clr-primary)"/>
                        </svg>
                    </div>
                    <div class="main__garage-scroll-item-car-img ${selection === 1 ? "notallowed" : ""}">
                        <img id="car-auto-${data.id}" src="img/imgs/${data.model}.png" alt="">
                    </div>
                    <div class="main__garage-scroll-item-bottom-container">
                        <div class="main__garage-scroll-item-bottom-container-header">
                            <p id="nicknameField-${data.id}">${data.nickname}</p>
                        </div>
                        <div class="main__garage-scroll-item-bottom-container-description">
                            <p>${data.plate}</p>
                        </div>
                        <div class="main__garage-scroll-item-bottom-line"></div>
                    </div>
                    <div class="main__garage-scroll-corners">
                        <div class="main__garage-scroll-corner-top-left">
                            <img src="img/square.svg" alt="">
                        </div>
                        <div class="main__garage-scroll-corner-top-right">
                            <img src="img/square.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="main__garage-scroll-item-rename" id="renameContainer-${data.id}" style="display: none;">
                    <div class="main__garage-scroll-item-rename-center">
                        <div class="main__garage-scroll-item-rename-center-container">
                            <div class="main__garage-scroll-item-rename-header">
                                <p>Fahrzeug umbenennen</p>
                            </div>
                            <div class="main__garage-scroll-item-rename-description">
                                <p>Bennene dein auto um</p>
                            </div>
                            <div class="main__garage-scroll-item-rename-input">
                                <input type="text" id="renameInput-${data.id}" placeholder="Name...">
                            </div>
                            <div class="main__garage-scroll-item-rename-button-accept" id="${data.id}" data-plate="${data.plate}">
                                <p>Rename</p>
                            </div>
                            <div class="main__garage-scroll-item-rename-button-cancle" id="${data.id}">
                                <p>Abbrechen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `)

        $(`#car-auto-${data.id}`).on('error', function () {
            $(`#car-auto-${data.id}`).attr('src', `img/doesnotexist.png`)
        })
    }

    const fetchVehicles = (parkIn, isFav, total) => {
        $(".main__garage-scroll-container").empty()

        $.post(`https://${GetParentResourceName()}/fetchVehicles`, JSON.stringify({
            total: total,
            isFav: isFav,
            parkIn: parkIn
        })).done((data) => {
            $("#totalCars").html(`<span>${data.totalCars}</span>/${data.totalCars}`)
            $("#favoriteCars").html(`<span class="garage__span-1">${data.favoriteCars}</span>/${data.totalCars}`)
            $("#parkInCars").html(`<span class="garage__span-2">${data.parkInCars}</span>/${data.totalCars}`)
            $("#parkOutCars").html(`<span class="garage__span-3">${data.parkOutCars}</span>/${data.totalCars}`)
        })
    }

    window.addEventListener('message', (event) => {
        switch (event.data.action) {
            case 'open': {
                selection = 3
                parkedIn = event.data.parkedIn
                $(".main__park-button").removeClass('active')
                $("#parkOut").addClass('active')
                fetchVehicles(false, false, false)

                spawnCoords = event.data.spawnCoords

                $(".main__garage-container").fadeIn()
            }
                break
            case 'addVehicle': {
                addVehicle(event.data)
            }
        }
    })

    window.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'Escape': {
                $(".main__garage-container").fadeOut()
                $.post(`https://${GetParentResourceName()}/escape`, JSON.stringify({}))
            }
                break
        }
    })

    $(".main__garage-info-button").click(function () {
        $(".main__garage-info-button").removeClass('active')
        $(this).addClass('active')

        const type = $(this).attr('data-type')

        switch (type) {
            case 'total-cars': {
                if (selection == 1) return

                selection = 1

                fetchVehicles(true, true, true)
            }
                break
            case 'favorite-cars': {
                if (selection == 2) return

                selection = 2

                fetchVehicles(false, true, false)
            }
                break
            case 'park-out': {
                if (selection == 3) return

                selection = 3
                fetchVehicles(false, false, false)
            }
                break
            case 'park-in': {
                if (selection == 4) return

                selection = 4
                fetchVehicles(true, false, false)
            }
                break
        }
    })

    $(document).on('click', ".main__garage-scroll-item-car-img", function () {
        if (selection === 1) return

        const plate = $(this).parent().parent().attr('data-plate')

        $.post(`https://${GetParentResourceName()}/queryVehicle`, JSON.stringify({
            parkIn: selection == 4,
            plate: plate,
            spawnCoords: spawnCoords
        }))

        $(".main__garage-container").fadeOut()
    })

    $("#searchInput").keyup(function (event) {
        const inputText = $(this).val().toUpperCase()

        $(".main__garage-scroll-item").each(function () {
            const get = $(this).attr("data-nickname").toUpperCase()
            const get2 = $(this).attr("data-plate").toUpperCase()

            if (!get.includes(inputText) && !get2.includes(inputText)) {
                $(this).hide()
            } else {
                $(this).show()
            }
        })
    })

    $(document).on("click", ".main__garage-rename-icon", function () {
        const id = $(this).attr('id')

        $(`#showContainer-${id}`).hide()
        $(`#renameContainer-${id}`).show()
    })

    $(document).on("click", ".main__garage-scroll-item-rename-button-cancle", function () {
        const id = $(this).attr('id')

        $(`#renameContainer-${id}`).hide()
        $(`#showContainer-${id}`).show()
    })

    $(document).on("click", ".main__garage-scroll-item-rename-button-accept", function () {
        const id = $(this).attr('id')
        const plate = $(this).attr('data-plate')
        const newNickname = $(`#renameInput-${id}`).val()

        $.post(`https://${GetParentResourceName()}/changeNickname`, JSON.stringify({
            nickname: newNickname,
            plate: plate
        }))

        $(`#nicknameField-${id}`).text(newNickname)
        $(`#renameContainer-${id}`).hide()
        $(`#showContainer-${id}`).show()
    })

    $(document).on("click", "#favButton", function () {
        const currrentClass = $(this).attr('class')
        const plate = $(this).parent().parent().parent().attr('data-plate')

        if (cooldownFav <= 0) {
            if (currrentClass.includes('active')) {
                $(this).removeClass('active')
                $(this).removeClass('fas fa-star')
                $(this).addClass('far fa-star')
            } else {
                $(this).addClass('active')
                $(this).removeClass('far fa-star')
                $(this).addClass('fas fa-star')
            }

            cooldownFav = 2

            $.post(`https://${GetParentResourceName()}/changeFav`, JSON.stringify({
                plate: plate,
                fav: $(this).attr('class').includes('active')
            })).then(() => {
                const current = $("#favoriteCars").text().split('/')

                $("#favoriteCars").html(`<span class="garage__span-1">${$(this).attr('class').includes('active') ? parseInt(current[0]) + 1 : parseInt(current[0]) - 1}</span>/${current[1]}`)
            })
        }
    })
})