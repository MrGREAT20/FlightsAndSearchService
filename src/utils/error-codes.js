const ClientErrors = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORISED: 401,
    NOT_FOUND: 404
});
/**
 * Object.freeze isiliye kiya taaki humara ClientErrors wala object change na ho kisi dusre ke influence se
 */

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,

});

const SuccessCodes = Object.freeze({
    CREATED: 201,
    OK: 200,
});

module.exports = {
    ClientErrors,
    ServerErrors,
    SuccessCodes
}