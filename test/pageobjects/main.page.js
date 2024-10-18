const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnAceptarContrato () {
        return $('android=new UiSelector().resourceId("com.bncr.detectid_otp:id/btnAceptar")');
    }

    get btnPermisoNotificaciones () {
        return $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');
    }

    get txtBienvenidoToken () {
        return $('android=new UiSelector().resourceId("com.bncr.detectid_otp:id/textViewContentRegister")');
    }

    get btnEscanearQR(){
        return $('android=new UiSelector().resourceId("com.bncr.detectid_otp:id/btn_scan_qr")');
    }

    get btnAgregarCodigo(){
        return $('android=new UiSelector().resourceId("com.bncr.detectid_otp:id/btn_enter_code")');
    }


    async aceptarContrato () {
        await this.btnAceptarContrato.click();
    }
    async aceptarPermisos () {
        await this.btnPermisoNotificaciones.click();
    }
}

module.exports = new MainPage();
