export const httpGet = async (baseUrl: string, queryParams: Record<string, string>) => {
    const queryString = Object
        .entries(queryParams)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    let url: string;
    if (queryParams) {
        url = `${baseUrl}?${queryString}`;
    } else {
        url = baseUrl;
    }

    try {
        const response = await fetch(url);
        if (response.ok) {
            const responseJson = await response.json();
            return responseJson;    
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch(e) {
        throw new Error(`${e}`);
    }
}
