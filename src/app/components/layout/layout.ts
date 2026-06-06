import { Component } from '@angular/core';
import { HotelCard } from '../hotel-card/hotel-card';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { 
  solarHamburgerMenuLinear,
  solarCalendarLinear,
  solarAltArrowDownLinear,
  solarHeadphonesRoundLinear,
  solarGlobalLinear,
  solarBuildings2Linear,
  solarPlain2Linear,
  solarMapPointLinear,
  solarSleepingLinear,
  solarUserLinear,
  solarAltArrowRightLinear,
  solarList1Linear,
  solarMapLinear,
  solarDoubleAltArrowLeftLinear,
  solarAltArrowLeftLinear,
  solarDoubleAltArrowRightLinear,
  solarArrowRightLinear,
  solarTextBoldLinear,
  solarTextLinear,
  solarCameraSquareLinear,
  solarShieldCrossLinear,
  solarClapperboardPlayLinear,
  solarTextItalicLinear,
  solarMusicNote2Linear,
  solarLeafLinear,
  solarPlayLinear,
  solarMagniferLinear
 } from '@ng-icons/solar-icons/linear';
import { solarCheckCircleBroken } from '@ng-icons/solar-icons/broken';

type HotelData = {
  name: string;
  price: number;
  imageUrl: string;
  tags: string[];
};

@Component({
  selector: 'app-layout',
  imports: [NgIcon, HotelCard],
   viewProviders: [
    provideIcons({ 
      solarHamburgerMenuLinear, 
      solarCheckCircleBroken,
      solarCalendarLinear,
      solarAltArrowDownLinear,
      solarHeadphonesRoundLinear,
      solarGlobalLinear,
      solarBuildings2Linear,
      solarPlain2Linear,
      solarMapPointLinear,
      solarSleepingLinear,
      solarUserLinear,
      solarAltArrowRightLinear,
      solarList1Linear,
      solarMapLinear,
      solarDoubleAltArrowLeftLinear,
      solarAltArrowLeftLinear,
      solarDoubleAltArrowRightLinear,
      solarArrowRightLinear,
      solarTextBoldLinear,
      solarTextLinear,
      solarCameraSquareLinear,
      solarShieldCrossLinear,
      solarClapperboardPlayLinear,
      solarTextItalicLinear,
      solarMusicNote2Linear,
      solarLeafLinear,
      solarPlayLinear,
      solarMagniferLinear
    })
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})

export class Layout {
  hotels: HotelData[] = [
    {
      name: 'Hotel RIU Bavaro',
      price: 202456,
      imageUrl: 'https://bynder.onthebeach.co.uk/cdn-cgi/image/width=1400,quality=80,fit=cover,format=auto/m/7bc1d8903cfa0bd5/original/Riu-Bravo.jpg',
      tags: ['España', 'Mallorca']
    },
    {
      name: 'Hotel Riu Sri Lanka',
      price: 128528,
      imageUrl: 'https://www.riu.com/blog/wp-content/uploads/2016/08/SRI_PREV16_001-Copiar.jpg',
      tags: ['Sri Lanka', 'Ahungalla']
    },
    {
      name: 'Hotel Riu Atoll',
      price: 267215,
      imageUrl: 'https://bynder.onthebeach.co.uk/m/624f7e7f97dee9b8/original/Hotel-Riu-Atoll.jpeg',
      tags: ['Maldivas', 'Dhaalu Atoll']
    },
    {
      name: 'Hotel Riu Palace Maldivas',
      price: 325668,
      imageUrl: 'https://res.cloudinary.com/lastminute/image/upload/q_auto/v1709280011/XMV_21_093_-_USP_mzr7sn.jpg',
      tags: ['Maldivas', 'Dhaalu Atoll']
    },
    {
      name: 'Hotel Riu Palace Zanzibar',
      price: 194079,
      imageUrl: 'https://www.riu.com/dam/02-RIU-Espanol/Building-Blocks/04-Paises/20-Tanzania/01-Zanzibar/01-Hotel-Riu-Palace-Zanzibar/Imagenes/-Slide-Home/slide-XZN-1.jpg',
      tags: ['Tanzania', 'Zanzíbar']
    },
    {
      name: 'Hotel Riu Jambo',
      price: 153050,
      imageUrl: 'https://www.riu.com/dam/02-RIU-Espanol/Building-Blocks/04-Paises/20-Tanzania/01-Zanzibar/03-Hotel-Riu-Jambo/Imagenes/-Slide-Home/JBO-slide.jpg',
      tags: ['Tanzania', 'Zanzíbar']
    }
  ]
}
