
export function get_host() {
    let protocol = window.location.protocol;
    let slashes = protocol.concat("//");
    let host = slashes.concat(window.location.hostname);
    return host
}

export function get_alta_observations_url() {
    let host = window.location.hostname;
    let base_url

    if (process.env.NODE_ENV === 'development') {
        base_url = "http://localhost:8000/altapi/observations"
    } else {
        base_url = "https://"+host+"/altapi/observations"
    }
    return base_url
}

export function get_alta_releases_url() {
    let protocol = window.location.protocol;
    let slashes = protocol.concat("//");
    let host = slashes.concat(window.location.hostname);
    let base_url = host.concat("/altapi/releases")

    if (process.env.NODE_ENV === 'development') {
        base_url = "http://localhost:8000/altapi/releases"
    }

    return base_url
}

export function get_alta_frontend_query_url() {
    let host = window.location.hostname;
    let base_url

    if (process.env.NODE_ENV === 'development') {
        base_url = "http://localhost:3000/science/query"
    } else {
        base_url = "https://"+host+"/science/query"
    }
    return base_url
}

export function get_alta_frontend_observations_url() {
    let host = window.location.hostname;
    let base_url
    if (process.env.NODE_ENV === 'development') {
        base_url = "http://localhost:3000/science/observations"
    } else {
        base_url = "https://"+host+"/science/observations"
    }
    return base_url
}