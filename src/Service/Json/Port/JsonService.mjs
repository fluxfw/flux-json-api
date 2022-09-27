import { ImportJson } from "../../../Adapter/ImportJson/ImportJson.mjs";
import { ImportJsonCommand } from "../Command/ImportJsonCommand.mjs";

export class JsonService {
    /**
     * @type {ImportJson}
     */
    #import_json;

    /**
     * @param {ImportJson} import_json
     * @returns {JsonService}
     */
    static new(import_json) {
        return new this(
            import_json
        );
    }

    /**
     * @param {ImportJson} import_json
     * @private
     */
    constructor(import_json) {
        this.#import_json = import_json;
    }

    /**
     * @param {string} url
     * @returns {Promise<*>}
     */
    async importJson(url) {
        return ImportJsonCommand.new(
            this.#import_json
        )
            .importJson(
                url
            );
    }
}
