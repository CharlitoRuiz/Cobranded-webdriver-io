const { expect } = require('@wdio/globals')
const MainPage = require('../pageobjects/main.page.js')

describe('Abrir la aplicacion en distintas versiones de android', () => {
    const androidVersion = driver.capabilities.platformVersion;
    it('Se debe abrir la aplicacion Cobranded en los dispositivos', async () => {
        await MainPage.btnAceptarContrato.waitForDisplayed();
        await browser.takeScreenshot();
        await MainPage.aceptarContrato();
        if (androidVersion.startsWith('14') || androidVersion.startsWith('13')) {
            await MainPage.aceptarPermisos();
        }
        await MainPage.btnEscanearQR.waitForDisplayed();
        await expect(MainPage.txtBienvenidoToken).toBeDisplayed();
        await expect(MainPage.btnEscanearQR).toBeDisplayed();
        await expect(MainPage.btnAgregarCodigo).toBeDisplayed();
        await browser.takeScreenshot();
    })
})