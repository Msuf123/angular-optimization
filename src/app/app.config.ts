import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig, provideCloudinaryLoader } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),{provide:IMAGE_LOADER,useValue:(config:ImageLoaderConfig)=>{
    console.log(config.width,'width of the requested image')
      return `https://res.cloudinary.com/dhm03owaz/image/upload/c_fill,h_${config.width},w_${config.width}${config.src}`
  }},{provide:IMAGE_CONFIG,useValue:{placeholderResolution:10}}, provideRouter(routes)]
};
