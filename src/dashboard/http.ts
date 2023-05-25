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
        console.log(url);
        const response = await fetch(url);
        if (response.ok) {
            const responseJson = await response.json();
            console.log(responseJson);
            return responseJson;    
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch(e) {
        console.error(e);
        throw new Error(`${e}`);
    }
}
