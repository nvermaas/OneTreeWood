
export function get_backend_host() {
    if (process.env.NODE_ENV === 'development') {
        return "http://localhost:8000"
    }
    let protocol = window.location.protocol;
    let slashes = protocol.concat("//");
    let host = slashes.concat(window.location.hostname);

    http://80.101.27.83/homebase/datacenter/items/
    return host
}

export function get_frontend_host() {
    if (process.env.NODE_ENV === 'development') {
        return "http://localhost:3000"
    }
    let protocol = window.location.protocol;
    let slashes = protocol.concat("//");
    let host = slashes.concat(window.location.hostname);
    return host
}

export function get_backend_url(resource) {
    //let host = get_backend_host().concat(resource)
    //alert(host)
    return get_backend_host().concat(resource)
}


export function get_alta_frontend_query_url() {
    let host = get_frontend_host().concat("/science/query")
    //alert(host)

    return get_frontend_host().concat("/science/query")
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