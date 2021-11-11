wappsto.configureName("Temp:bit")
wappsto.configureValue(1, "Temperature", WappstoValueTemplate.Temperature)
basic.forever(function () {
    wappsto.sendNumberToWappsto(input.temperature(), 1)
    basic.pause(10000)
})
