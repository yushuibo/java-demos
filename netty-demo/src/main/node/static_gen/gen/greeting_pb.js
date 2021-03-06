/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.me.shy.demo.grpc.GreetingRequest', null, global);
goog.exportSymbol('proto.me.shy.demo.grpc.GreetingResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.me.shy.demo.grpc.GreetingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.me.shy.demo.grpc.GreetingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.me.shy.demo.grpc.GreetingRequest.displayName = 'proto.me.shy.demo.grpc.GreetingRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.me.shy.demo.grpc.GreetingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.me.shy.demo.grpc.GreetingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.me.shy.demo.grpc.GreetingRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.me.shy.demo.grpc.GreetingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.me.shy.demo.grpc.GreetingRequest}
 */
proto.me.shy.demo.grpc.GreetingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.me.shy.demo.grpc.GreetingRequest;
  return proto.me.shy.demo.grpc.GreetingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.me.shy.demo.grpc.GreetingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.me.shy.demo.grpc.GreetingRequest}
 */
proto.me.shy.demo.grpc.GreetingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.me.shy.demo.grpc.GreetingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.me.shy.demo.grpc.GreetingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.me.shy.demo.grpc.GreetingRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.me.shy.demo.grpc.GreetingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.me.shy.demo.grpc.GreetingRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.me.shy.demo.grpc.GreetingRequest.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.me.shy.demo.grpc.GreetingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.me.shy.demo.grpc.GreetingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.me.shy.demo.grpc.GreetingResponse.displayName = 'proto.me.shy.demo.grpc.GreetingResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.me.shy.demo.grpc.GreetingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.me.shy.demo.grpc.GreetingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.me.shy.demo.grpc.GreetingResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.me.shy.demo.grpc.GreetingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    greetwords: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.me.shy.demo.grpc.GreetingResponse}
 */
proto.me.shy.demo.grpc.GreetingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.me.shy.demo.grpc.GreetingResponse;
  return proto.me.shy.demo.grpc.GreetingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.me.shy.demo.grpc.GreetingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.me.shy.demo.grpc.GreetingResponse}
 */
proto.me.shy.demo.grpc.GreetingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGreetwords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.me.shy.demo.grpc.GreetingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.me.shy.demo.grpc.GreetingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.me.shy.demo.grpc.GreetingResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.me.shy.demo.grpc.GreetingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGreetwords();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string greetWords = 1;
 * @return {string}
 */
proto.me.shy.demo.grpc.GreetingResponse.prototype.getGreetwords = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.me.shy.demo.grpc.GreetingResponse.prototype.setGreetwords = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.me.shy.demo.grpc);
