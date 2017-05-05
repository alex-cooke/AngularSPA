import { Injectable } from '@angular/core';
import * as lodash from 'lodash';

export interface IconFiles {
    imageFile: string,
    alt: string,
    link: string
}

export interface FrameworkConfigSettings {
    showLanguageSelector?: boolean,
    showUserControls?: boolean,
    showStatusBar?: boolean,
    showStatusBarBreakpoint?: number,
    socialIcons?: Array<IconFiles>
}

@Injectable()
export class FrameworkConfigService {

    showLanguageSelector = true;
    showUserControls = true;
    showStatusBar = true;
    showStatusBarBreakpoint = 0;
    socialIcons = new Array<IconFiles>();

    configure(settings: FrameworkConfigSettings) : void {
        lodash.assign(this, settings);
    }

}
