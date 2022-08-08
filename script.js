let event_start_time = $('.timepicker-start').wickedpicker({
    now: '09:00',
    twentyFour: true,
    title: ''
});
// let event_start_time = $('.timepicker-start');

let event_end_time = $('.timepicker-end').wickedpicker({
    now: '09:45',
    twentyFour: true,
    title: ''
});
// let event_end_time = $('.timepicker-end');

event_start_time.on('change', function () {
    // $(this).wickedpicker({
    //     twentyFour: true,
    //     title: ''
    // });
    setMax($(this), event_end_time)
})

event_end_time.on('change', function () {
    // $(this).wickedpicker({
    //     twentyFour: true,
    //     title: ''
    // });
    setMin($(this), event_start_time)
})

function setMax(elem, target) {
    let currentTime = elem.wickedpicker('time');
    let currentArray = currentTime.split(' : ');
    let currentHour = parseInt(currentArray[0]);
    let currentMinute = parseInt(currentArray[1]);

    let currentTargetTime = target.wickedpicker('time');
    let currentTargetArray = currentTargetTime.split(' : ');
    let currentTargetHour = parseInt(currentTargetArray[0]);
    let currentTargetMinute = parseInt(currentTargetArray[1]);

    if (currentHour == currentTargetHour) {
        $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'hidden')
        $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'visible')
        console.log('currentHour == currentTargetHour')

        if (currentMinute < currentTargetMinute) {
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'visible')
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'visible')
            console.log('currentMinute < currentTargetMinute')

            if (currentMinute == 0) {
                $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'visible')
                $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'hidden')
                console.log('currentMinute == 0')
            }
        }

        if (currentMinute == (currentTargetMinute - 1)) {
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'hidden')
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'visible')
            console.log('currentMinute == (currentTargetMinute - 1)')
        }
    }

    if (currentHour < currentTargetHour) {
        $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'visible')
        $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'visible')
        $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'visible')
        $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'visible')
        console.log('currentHour < currentTargetHour')

        if (currentHour == 0) {
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'visible')
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'hidden')
            console.log('currentHour == 0')
        }

        if ((currentTargetHour - 1) == currentHour && currentMinute >= currentTargetMinute) {
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'hidden')
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'visible')
            console.log('(currentHour - 1) == currentTargetHour && currentMinute >= currentTargetMinute')
        }
    }

    // Target Change
    $(target).on('change', function () {
        let time = elem.wickedpicker('time');
        let array = time.split(' : ');
        let hour = parseInt(array[0]);
        let minute = parseInt(array[1]);

        let targetTime = target.wickedpicker('time');
        let targetArray = targetTime.split(' : ');
        let targetHour = parseInt(targetArray[0]);
        let targetMinute = parseInt(targetArray[1]);

        console.log('=========================================================')
        console.log('setMax')
        console.log('hour : ' + hour)
        console.log('minute : ' + minute)
        console.log('targetHour : ' + targetHour)
        console.log('targetMinute : ' + targetMinute)

        if (targetHour > hour && targetHour < 23) {
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'visible');
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'visible');
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'visible');
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'visible');
            console.log('targetHour > hour && targetHour < 23')

            if (targetHour == (hour + 1) && targetMinute <= minute) {
                $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'visible');
                $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'hidden');
                console.log('targetHour == (hour + 1) && targetMinute < minute')
            }
        }

    })
}

function setMin(elem, target) {
    let currentTime = elem.wickedpicker('time');
    let currentArray = currentTime.split(' : ');
    let currentHour = parseInt(currentArray[0]);
    let currentMinute = parseInt(currentArray[1]);

    let currentTargetTime = target.wickedpicker('time');
    let currentTargetArray = currentTargetTime.split(' : ');
    let currentTargetHour = parseInt(currentTargetArray[0]);
    let currentTargetMinute = parseInt(currentTargetArray[1]);

    if (currentHour == currentTargetHour) {
        $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'visible')
        $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'hidden')
        console.log('currentHour == currentTargetHour')

        if (currentMinute > currentTargetMinute) {
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'visible')
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'visible')
            console.log('currentMinute > currentTargetMinute')

            if (currentMinute == 59) {
                $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'hidden')
                $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'visible')
                console.log('currentMinute == 59')
            }
        }

        if (currentMinute == (currentTargetMinute + 1)) {
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'visible')
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'hidden')
            console.log('currentMinute == (currentTargetMinute + 1)')
        }
    }

    if (currentHour > currentTargetHour) {
        $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'visible')
        $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'visible')
        $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'visible')
        $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'visible')
        console.log('currentHour > currentTargetHour')

        if (currentHour == 23) {
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'hidden')
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'visible')
            console.log('currentHour == 23')
        }

        if ((currentTargetHour + 1) == currentHour && currentMinute <= currentTargetMinute) {
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'visible')
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'hidden')
            console.log('(currentHour - 1) == currentTargetHour && currentMinute > currentTargetMinute')
        }
    }

    // Target Change
    $(target).on('change', function () {
        let time = elem.wickedpicker('time');
        let array = time.split(' : ');
        let hour = parseInt(array[0]);
        let minute = parseInt(array[1]);

        let targetTime = target.wickedpicker('time');
        let targetArray = targetTime.split(' : ');
        let targetHour = parseInt(targetArray[0]);
        let targetMinute = parseInt(targetArray[1]);

        console.log('=========================================================')
        console.log('setMin')
        console.log('hour : ' + hour)
        console.log('minute : ' + minute)
        console.log('targetHour : ' + targetHour)
        console.log('targetMinute : ' + targetMinute)

        if (targetHour < hour && targetHour > 0) {
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'visible');
            $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'visible');
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-up').css('visibility', 'visible');
            $('.wickedpicker').find('.wickedpicker__controls__control:nth-last-child(2) .wickedpicker__controls__control-down').css('visibility', 'visible');
            console.log('targetHour < hour && targetHour > 0')

            if (targetHour == (hour - 1) && targetMinute >= minute) {
                $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-up').css('visibility', 'hidden');
                $('.wickedpicker').find('.wickedpicker__controls__control:first-child .wickedpicker__controls__control-down').css('visibility', 'visible');
                console.log('targetHour == (hour - 1) && targetMinute > minute')
            }
        }
    })
}
