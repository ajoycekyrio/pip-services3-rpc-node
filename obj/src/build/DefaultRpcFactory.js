"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @module build */
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const HttpEndpoint_1 = require("../services/HttpEndpoint");
const HeartbeatRestService_1 = require("../services/HeartbeatRestService");
const StatusRestService_1 = require("../services/StatusRestService");
/**
 * Creates RPC components by their descriptors.
 *
 * @see [[https://rawgit.com/pip-services-node/pip-services3-components-node/master/doc/api/classes/build.factory.html Factory]]
 * @see [[HttpEndpoint]]
 * @see [[HeartbeatRestService]]
 * @see [[StatusRestService]]
 */
class DefaultRpcFactory extends pip_services3_components_node_1.Factory {
    /**
     * Create a new instance of the factory.
     */
    constructor() {
        super();
        this.registerAsType(DefaultRpcFactory.HttpEndpointDescriptor, HttpEndpoint_1.HttpEndpoint);
        this.registerAsType(DefaultRpcFactory.HeartbeatServiceDescriptor, HeartbeatRestService_1.HeartbeatRestService);
        this.registerAsType(DefaultRpcFactory.StatusServiceDescriptor, StatusRestService_1.StatusRestService);
    }
}
exports.DefaultRpcFactory = DefaultRpcFactory;
DefaultRpcFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "factory", "rpc", "default", "1.0");
DefaultRpcFactory.HttpEndpointDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "endpoint", "http", "*", "1.0");
DefaultRpcFactory.StatusServiceDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "status-service", "http", "*", "1.0");
DefaultRpcFactory.HeartbeatServiceDescriptor = new pip_services3_commons_node_1.Descriptor("pip-services", "heartbeat-service", "http", "*", "1.0");
//# sourceMappingURL=DefaultRpcFactory.js.map