import { LightningElement,api } from 'lwc';

export default class Prismoonchild extends LightningElement {
    @api autoScroll = false;
    @api customHeight = '500px';
    @api customWidth = '100%';
    @api hideNavigationButtons = false;
    @api hideNavigationDots = false;
    @api hideSlideNumber = false;
    @api hideSlideText = false;
    @api scrollDuration = 3000;
    slides = [];
    slideIndex = 1;
    timer;
    get maxWidth() {
        return `width: ${this.customWidth}`;
    }
    get maxHeight() {
        return `height: ${this.customHeight}; width:100%`;
    }
    @api
    get slidesData() {
        return this.slides;
    }
    set slidesData(data) {
        this.slides = data.map((slide, i) => {
            if (i === 0) {
                return {
                    ...slide,
                    index: i + 1,
                    slideClass: 'fade slds-show',
                    dotClass: 'dot active'
                };
            }
            return {
                ...slide,
                index: i + 1,
                slideClass: 'fade slds-hide',
                dotClass: 'dot'
            };
        });
    }
    connectedCallback() {
        if (this.autoScroll) {
            this.timer = window.setInterval(() => {
                this.handleSlideSelection(this.slideIndex + 1);
            }, Number(this.scrollDuration));
        }
    }
    handleMouseOver() {
        if (this.autoScroll) {
            window.clearInterval(this.timer);
        }
    }
    handleMouseOut() {
        if (this.autoScroll) {
            this.timer = window.setInterval(() => {
                this.handleSlideSelection(this.slideIndex + 1);
            }, Number(this.scrollDuration));
        }
    }
    disconnectedCallback() {
        if (this.autoScroll) {
            window.clearInterval(this.timer);
        }
    }
    showSlide(event) {
        const slideIndex = Number(event.target.dataset.id);
        this.handleSlideSelection(slideIndex);
    }
    slideBackward() {
        const slideIndex = this.slideIndex - 1;
        this.handleSlideSelection(slideIndex);
    }
    slideForward() {
        const slideIndex = this.slideIndex + 1;
        this.handleSlideSelection(slideIndex);
    }
    handleSlideSelection(index) {
        if (index > this.slides.length) {
            this.slideIndex = 1;
        } else if (index < 1) {
            this.slideIndex = this.slides.length;
        } else {
            this.slideIndex = index;
        }
        this.slides = this.slides.map((slide) => {
            if (this.slideIndex === slide.index) {
                return {
                    ...slide,
                    slideClass: 'fade slds-show',
                    dotClass: 'dot active'
                };
            }
            return {
                ...slide,
                slideClass: 'fade slds-hide',
                dotClass: 'dot'
            };
        });
    }
}