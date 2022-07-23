import './style.css';
import Alpine from 'alpinejs';

Object.defineProperty(window, "Alpine", {
    value: Alpine,
});

Alpine.data("imageResizer", () => ({
    size: 0,
    init() {
        this.$watch("size", (size: number) => {
            (this.$refs.image as HTMLDivElement).style.setProperty("--border-size", size + "rem");
        });
    },
}));

Alpine.data("nav", () => ({
    open: false,
    onResize() {
        if(window.matchMedia("screen and (min-width: 768px)").matches) {
            this.open = false;
        }
    },
}));

Alpine.start();