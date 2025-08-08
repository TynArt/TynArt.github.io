function orderNow() {
    const message = encodeURIComponent("مرحباً، أريد طلب لوحة مخصصة.");
    window.open("https://wa.me/962799608639?text=" + message, "_blank");
}
