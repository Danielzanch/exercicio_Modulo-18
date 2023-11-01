document.addEventListener('DOMContentLoaded', function () {
    const controls = document.querySelectorAll('.control');
    const controls_Friends = document.querySelectorAll('.control-Friends');
    const controls_Trip = document.querySelectorAll('.control-Trip');

    // fotos Familia
    let currentItem = 0;
    const items = document.querySelectorAll('.items');
    const maxItems = items.length;
    console.log(maxItems);

    controls.forEach((control) => {
        control.addEventListener('click', () => {
            const isLeft = control.classList.contains("arrow-left");
            if (isLeft) {
                currentItem -= 1;
            } else {
                currentItem += 1;
            }

            if (currentItem >= maxItems) {
                currentItem = maxItems - 1;
            }

            if (currentItem < 0) {
                currentItem = 0;
            }

            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth",
            })
        })
    })

    // fotos dos Amigos
    let currentItem_Friends = 0;
    const items_Friends = document.querySelectorAll('.items-Friends');
    const maxItems_friends = items_Friends.length;
    console.log(maxItems_friends);

    controls_Friends.forEach((control) => {
        control.addEventListener('click', () => {
            const isLeft = control.classList.contains("arrow-left");
            if (isLeft) {
                currentItem_Friends -= 1;
            } else {
                currentItem_Friends += 1;
            }

            if (currentItem_Friends >= maxItems_friends) {
                currentItem_Friends = maxItems_friends - 1;
            }

            if (currentItem_Friends < 0) {
                currentItem_Friends = 0;
            }

            items_Friends[currentItem_Friends].scrollIntoView({
                inline: "center",
                behavior: "smooth",
            })
        })
    })

        // fotos dos Ferias
        let currentItem_Trip = 0;
        const items_Trip = document.querySelectorAll('.items-Trip');
        const maxItems_Trip = items_Trip.length;
        console.log(maxItems_Trip);
    
        controls_Trip.forEach((control) => {
            control.addEventListener('click', () => {
                const isLeft = control.classList.contains("arrow-left");
                if (isLeft) {
                    currentItem_Trip -= 1;
                } else {
                    currentItem_Trip += 1;
                }
    
                if (currentItem_Trip >= maxItems_Trip) {
                    currentItem_Trip = maxItems_Trip - 1;
                }
    
                if (currentItem_Trip < 0) {
                    currentItem_Trip = 0;
                }
    
                items_Trip[currentItem_Trip].scrollIntoView({
                    inline: "center",
                    behavior: "smooth",
                })
            })
        })
})