export { };

type GtagArg = string | number | boolean | Date | null | undefined | Record<string, unknown>;

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag: (...args: GtagArg[]) => void;
    }
}
