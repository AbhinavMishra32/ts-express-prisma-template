export interface CustomError extends Error {
    statusCode?: number;
}

export const errorHandler = (statusCode: number, message: string, err?: string,): CustomError => {
    console.log("Error:", err);
    const error: CustomError = new Error() as CustomError;
    error.statusCode = statusCode;
    error.message = message;
    console.log("Error occured:", error.message);
    return error;
}