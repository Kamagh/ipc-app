import APP_BRIDGE from "../server/preload"

declare global {
    interface Window {bridge: typeof APP_BRIDGE}
}