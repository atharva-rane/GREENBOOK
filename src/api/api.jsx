const URI = "https://greenbook-backend.vercel.app/api";

function formDataConvert(data) {
    // let output = new FormData();
    // for (const key in data) {
    //     output.append(key, data[key]);
    // }
    // return output;
    return data;
}


class AsyncAPIHandler {
    dependency;
    data;
    promise;
    subscriber;
    privateVisibility;
    counter;
    cacheSchema;

    constructor(dependency, data=null, privateVisibility=true, cacheSchema=null) {

        // load any data from cache
        this.data = data;
        this.promise = new Promise((resolve, reject) => {resolve();});
        this.subscriber = (val) => {};
        this.dependency = dependency;
        this.privateVisibility = privateVisibility;
        this.counter = 0;
        this.cacheSchema = cacheSchema;
    }

    setSubscriber(callbackFunction) {
        this.subscriber = callbackFunction;
    }

    async requestHelper(path, form) {
        if (this.dependency !== null) {
            // todo handle case if dependency promise is initialized but actually performed
            await this.dependency.promise;
        }
        if (this.privateVisibility) {
            // form.append("email", authenticator.data["email"]);
            // form.append("session_id", authenticator.data["session_id"]);
            form["email"] = this.dependency.data["email"];
            form["sessionId"] = this.dependency.data["sessionId"];
        }
        let promise = fetch(URI + path, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        let response = await promise;
        let json = await response.json();
        this.data = json;
        this.data["status"] = response.status;
        if ("email" in form) {
            this.data["email"] = form["email"];
        }
        this.counter++;
        this.subscriber(this.counter);
        if (this.cacheSchema !== null) {
            for (const dataKey in this.cacheSchema) {
                localStorage.setItem(this.cacheSchema[dataKey], this.data[dataKey]);
            }
        }
    }

    request(path, form) {
        this.promise = this.requestHelper(path, form);
    }
}


let authenticator = new AsyncAPIHandler(null,
    {"email": localStorage.getItem("email"), "sessionId": localStorage.getItem("sessionId")},
    false, {"email": "email", "sessionId": "sessionId"});
let dashboardData = new AsyncAPIHandler(authenticator);
let corporateUnionsData = new AsyncAPIHandler(authenticator);
let authenticatedUnionData = new AsyncAPIHandler(authenticator);
let authenticatedUnionDeleteData = new AsyncAPIHandler(authenticator);
let authenticatedUnionCreateData = new AsyncAPIHandler(authenticator);
let authenticatedUnionUpdateData = new AsyncAPIHandler(authenticator);
// let farmerDashboardData = new AsyncAPIHandler(authenticator);
// let corportateDashboardData = new AsyncAPIHandler(authenticator);

export function loginHandler(data, subscriber) {
    authenticator.setSubscriber(subscriber);
    authenticator.request("/login", formDataConvert(data));
}

export function getLoginData() {
    return authenticator.data;
}

export function registrationHandler(data, subscriber) {
    authenticator.setSubscriber(subscriber);
    authenticator.request("/register", formDataConvert(data));
}

export function getRegistrationData() {
    return authenticator.data;
}

export function dashboardHandler(data, subscriber) {
    dashboardData.setSubscriber(subscriber);
    dashboardData.request("/dashboard", formDataConvert(data))
}

export function getDashboardData() {
    return dashboardData.data;
}

export function corporateUnionsHandler(data, subscriber) {
    corporateUnionsData.setSubscriber(subscriber);
    corporateUnionsData.request("/auth/unions", formDataConvert(data));
}

export function getCorporateUnionsData() {
    return corporateUnionsData.data;
}

export function authenticatedUnionByIdHandler(id, data, subscriber) {
    authenticatedUnionData.setSubscriber(subscriber);
    authenticatedUnionData.request(`/auth/unions/${id}`, formDataConvert(data));
}

export function getAuthenticatedUnionByIdData() {
    return authenticatedUnionData.data;
}

export function authenticatedDeleteUnionHandler(id, data, subscriber) {
    authenticatedUnionDeleteData.setSubscriber(subscriber);
    authenticatedUnionDeleteData.request(`/auth/delete/union/${id}`, formDataConvert(data));
}

export function getAuthenticatedDeleteUnionData() {
    return authenticatedUnionDeleteData.data;
}

export function authenticatedUnionCreateHandler(data, subscriber) {
    authenticatedUnionCreateData.setSubscriber(subscriber);
    authenticatedUnionCreateData.request("/auth/union", formDataConvert(data));
}

export function getAuthenticatedUnionCreateData() {
    return authenticatedUnionCreateData.data;
}

export function authenticatedUpdateUnionHandler(id, data, subscriber) {
    authenticatedUnionUpdateData.setSubscriber(subscriber);
    authenticatedUnionUpdateData.request(`/auth/update/union/${id}`, formDataConvert(data));
}

export function getAuthenticatedUpdateUnionData() {
    return authenticatedUnionUpdateData.data;
}

/*
export function farmerDashboardHandler(data, subscriber) {
    farmerDashboardData.setSubscriber(subscriber);
    farmerDashboardData.request("/farmer_dashboard", formDataConvert(data))
}

export function getFarmerDashboardData() {
    return farmerDashboardData.data;
}

export function corporateDashboardHandler(data, subscriber) {
    corportateDashboardData.setSubscriber(subscriber);
    corportateDashboardData.request("/corporate_dashboard", formDataConvert(data))
}

export function getCorporateDashboardData() {
    return corportateDashboardData.data;
}
*/

export async function groupRequest(paths, forms, subscriber) {
    let promises = [];
    for (let i = 0; i < paths.length; i++) {
        let path = paths[i];
        let form = forms[i];
        if (authenticator !== null) {
            await authenticator.promise;
            // form.append("email", authenticator.data["email"]);
            // form.append("session_id", authenticator.data["session_id"]);
            form["email"] = authenticator.data["email"];
            form["sessionId"] = authenticator.data["sessionId"];
        }
        let promise = fetch(URI + path, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        promises.push(promise);
    }
    let responses = await Promise.all(promises);
    let data = await Promise.all(
        responses.map(async (response) => {
            let payload = await response.json();
            payload["status"] = response.status;
            return payload;
        })
    );
    subscriber(data);
}
