export const reportConversion = (url: string) => {
    const callback = () => {
        if (typeof url !== "undefined") {
            window.location.href = url;
        }
    };

    if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
            send_to: "AW-17814899877/z1S-CKq2y9MbEKWZ565C",
            event_callback: callback,
        });
    } else {
        // Fallback if gtag is not loaded
        window.location.href = url;
    }
    return false;
};
