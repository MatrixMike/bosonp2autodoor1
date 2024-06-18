basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
        basic.showIcon(IconNames.Heart)
    } else {
        pins.servoWritePin(AnalogPin.P0, 120)
    }
})
