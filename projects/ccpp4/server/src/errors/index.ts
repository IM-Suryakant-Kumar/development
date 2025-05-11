class cutomAPIError extends Error {
	constructor(message: string) {
		super(message);
	}
}

export class BadRequestError extends cutomAPIError {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 400;
	}
}

export class NotFoundError extends cutomAPIError {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 404;
	}
}

export class UnauthenticatedError extends cutomAPIError {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 401;
	}
}

export class UnauthorizedError extends cutomAPIError {
	statusCode: number;
	constructor(message: string) {
		super(message);
		this.statusCode = 403;
	}
}
