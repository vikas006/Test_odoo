import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {OdooRPCService} from './services/odoo-rpc.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private odooRPC: OdooRPCService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.callOdoo();
        });
    }

    //
    callOdoo() {
        this.odooRPC.init({
            odoo_server: 'https://test.blendedideas.in',
            // odoo_server: 'https://worthit.in',
        });
        this.odooRPC.login('demo', 'admin', 'aa').then(res => {
            console.log('login success');
        }).catch(err => {
            console.error('login failed', err);
        });
    }
}
