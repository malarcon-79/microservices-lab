import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';

// Build the services
// auna.proto file must have an import for every needed proto files
const protoPath = [
	path.resolve(__dirname, '../protos', 'auna.proto'),
	//path.resolve(__dirname, '../grpc/health/v1', 'health.proto'),
];

const options = {
	keepCase: true,
	defaults: true,
	oneofs: true,
	includeDirs: [
		//path.resolve(__dirname, '../google-protos'),
		//path.resolve(__dirname, '../grpc'),
		path.resolve(__dirname, '../protos')
	]
};

// The protoDescriptor object has the full package hierarchy, however
// we will only be using the services which may be used as classes
// (ie. new Service()) that have the service implementation that will
// send and receive messages.
const packageDefinitions = protoLoader.loadSync(protoPath, options);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinitions);

export { protoDescriptor as services };