import { Request, Response } from "express";
import {credentials } from '@grpc/grpc-js';
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import {} from 'grpc-protos-node';

export const create = async (req: Request, res: Response) => {
    const msg = req.body;

    let options = {
        'grpc.lb_policy_name': 'round_robin',
        'grpc.dns_min_time_between_resolutions_ms': 500
    };

    const creds = credentials.createInsecure();
    let stub: ServiceClient =  //new ServiceClientConstructor('billing-service.backend:5000', creds, options);
    

    return res.json(req.body);
    // llamada gRPC
}