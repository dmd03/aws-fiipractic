export const MyCustomRole = {
    Type: "AWS::IAM::Role",
    Properties: {
        AssumeRolePolicyDocument: {
            Version: "2012-10-17",
            Statement: [
                {
                    Effect: "Allow",
                    Principal: {
                        Service: ["lambda.amazonaws.com"],
                    },
                    Action: ["sts:AssumeRole"],
                }
            ],
        },
        Policies: [
            {
                PolicyName: "allow-cloudwatch-and-s3",
                PolicyDocument: {
                    Version: "2012-10-17",
                    Statement: [
                        {
                            Effect: "Allow",
                            Action: [
                                "logs:CreateLogGroup",
                                "logs:CreateLogStream",
                                "logs:PutLogEvents",
                                "logs:TagResource",
                            ],
                            Resource: "*"
                        },
                        {
                            Effect: "Allow",
                            Action: [
                                "s3:*"
                            ],
                            Resource: "*"
                        }
                    ]
                }
            }
        ]
    }
}