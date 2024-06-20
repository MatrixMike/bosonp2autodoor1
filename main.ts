basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
        basic.showIcon(IconNames.Yes)
    } else {
        pins.servoWritePin(AnalogPin.P0, 120)
    }
})
