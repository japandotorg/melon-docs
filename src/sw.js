import { registerRoute, registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

export default function swCustom(params) {
    if (params.debug) {
        console.log('[ MELON-DOCS ][ SW ]: running swCustom code', params);
    }

    registerRoute((context) => {
        return[
            /graph\.japandotorg\.me\/.*\/picture/,
            /netlify\.com\/img/,
            /avatars1\/.githubusercontent/,
        ].some((regex) => context.url.href.match(regex));
    }, new StaleWhileRevalidate());
}