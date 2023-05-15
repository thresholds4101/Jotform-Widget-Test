let label = JFCustomWidget.getWidgetSetting("ready", function () {

    document.querySelector('#labelText').innerHTML = label

    JFCustomWidget.subscribe("submit", function () {

        let msg = {
            valid: true,
            value: document.querySelector('#userInput').value
        }

        JFCustomWidget.sendSubmit(msg)

    })

})