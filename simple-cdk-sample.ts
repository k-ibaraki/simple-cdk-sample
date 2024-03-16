import * as cdk from 'aws-cdk-lib';
import { ApiGatewayToLambda } from '@aws-solutions-constructs/aws-apigateway-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda';

const app = new cdk.App();
const stack = new cdk.Stack(app, "SimpleCdkSampleStack", {});

const apiLambda = new ApiGatewayToLambda(stack, 'ApiGatewayToLambda', {
  lambdaFunctionProps: {
    runtime: lambda.Runtime.NODEJS_20_X,
    handler: 'index.handler',
    code: lambda.Code.fromAsset(`lambda`)
  },
  apiGatewayProps: {
    restApiName: 'SimpleCdkSampleApi',
    defaultMethodOptions: {
      authorizationType: 'NONE',
    },
  },
});
