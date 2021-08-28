export interface JsonApiData<T> {
	id: number;
	attributes: T;
}
export interface JsonApiList<T> {
	data: Array<JsonApiData<T>>;
}
export interface JsonApiItem<T> {
	data: JsonApiData<T>;
}

export interface ResponseMessage<T> {
	data: JsonApiItem<T>;
	status?: string;
	message?: string;
	errors?: any;
}
