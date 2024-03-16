import * as cdk from 'aws-cdk-lib';
import { ApiGatewayToLambda } from '@aws-solutions-constructs/aws-apigateway-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda';

// CDKのAppを定義
const app = new cdk.App();
// Appの配下にStackを定義
const stack = new cdk.Stack(app, "SimpleCdkSampleStack", {});
// Stackの配下にConstruct(ApiGatewayToLambda)を定義
const apiToLambda = new ApiGatewayToLambda(stack, 'ApiGatewayToLambda', {
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
