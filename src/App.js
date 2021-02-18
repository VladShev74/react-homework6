import React from 'react';
import Section from "./Section";
import Weather from "./Weather";

export default function App() {
   return (
   <Section name="Погода в Україні">
       <Weather cityName="Kyiv" degrees={4} imageLink="https://p.kindpng.com/picc/s/178-1780507_sunny-weather-weather-line-icon-png-transparent-png.png"/>
       <Weather cityName="Lviv" degrees={-3} imageLink="https://www.clipartkey.com/mpngs/m/191-1914094_icon-free-download-png-snow-weather-icon.png"/>
       <Weather cityName="Odesa" degrees={7} imageLink="https://i.pinimg.com/originals/98/0a/65/980a65fa20c0887a1342d5aa97ef9953.png"/>
       <Weather cityName="Zhytomyr" degrees={2} imageLink="https://p.kindpng.com/picc/s/178-1780507_sunny-weather-weather-line-icon-png-transparent-png.png"/>
   </Section>
)};