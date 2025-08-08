function orderNow() {
    const message = encodeURIComponent("Hi there! I’d liketo order a painting from your collection.");
    window.open("https://wa.me/962799608639?text=" + message, "_blank");
}
