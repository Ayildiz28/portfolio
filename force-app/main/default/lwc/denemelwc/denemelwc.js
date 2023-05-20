import { LightningElement } from 'lwc';

import ports from '@salesforce/resourceUrl/ports';
export default class denemelwc extends LightningElement {
    sliderdata=ports;
    slider1Image = ports + '/1.png';
    slider1Link = '#';
    slider2Image = ports + '/2.png';
    slider2Link = '#';
    slider3Image = ports + '/3.png';
    slider3Link = '#';
    slider4Image = ports + '/4.png';
    slider4Link = '#';
    slider5Image = ports + '/5.png';
    slider5Link = '#';
    slider6Image = ports + '/6.png';
    slider6Link = '#';
    slider7Image = ports + '/7.png';
    slider7Link = '#';
    slider8Image = ports + '/8.png';
    slider8Link = '#';
    slider9Image = ports + '/9.png';
    slider9Link = '#';
    slider10Image = ports +  '/10.png';
    slider10Link = '#';
     /*slider11Image = cwimp + '/11.png';
    slider11Link = '#';
    slider12Image = cwimp + '/12.png';
    slider12Link = '#';
    slider13Image = cwimp + '/13.png';
    slider13Link = '#';
    slider14Image = cwimp + '/14.png';
    slider14Link = '#';
    slider15Image = cwimp + '/15.png';
    slider15Link = '#';
    slider16Image = cwimp + '/16.png';
    slider16Link = '#';
    slider17Image = cwimp + '/17.png';
    slider17Link = '#';
    slider18Image = cwimp + '/18.png';
    slider18Link = '#';
    slider19Image = cwimp + '/19.png';
    slider19Link = '#';
    slider20Image = cwimp + '/20.png';
    slider20Link = '#';
    slider21Image = cwimp +  '/21.png';
    slider21Link = '#';
    slider22Image = cwimp + '/22.png';
    slider22Link = '#';
    slider23Image = cwimp + '/23.png';
    slider23Link = '#';*/
    autoScroll = true;
    get sliderData() {
        return [{
            "image": this.slider1Image,
            "link": this.slider1Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider2Image,
            "link": this.slider2Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider3Image,
            "link": this.slider3Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider4Image,
            "link": this.slider4Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider5Image,
            "link": this.slider5Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider6Image,
            "link": this.slider6Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider7Image,
            "link": this.slider7Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider8Image,
            "link": this.slider8Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider9Image,
            "link": this.slider9Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider10Image,
            "link": this.slider10Link,
            "heading": "",
            "description": "",
        },
       /* {
            "image": this.slider11Image,
            "link": this.slider11Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider12Image,
            "link": this.slider12Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider13Image,
            "link": this.slider13Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider14Image,
            "link": this.slider14Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider15Image,
            "link": this.slider15Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider16Image,
            "link": this.slider16Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider17Image,
            "link": this.slider18Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider19Image,
            "link": this.slider19Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider20Image,
            "link": this.slider20Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider21Image,
            "link": this.slider21Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider22Image,
            "link": this.slider22Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider23Image,
            "link": this.slider23Link,
            "heading": "",
            "description": "",
        },*/
       ]
    }
}