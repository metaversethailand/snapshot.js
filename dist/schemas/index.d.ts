declare const _default: {
    space: {
        title: string;
        type: string;
        properties: {
            name: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            private: {
                type: string;
            };
            about: {
                type: string;
                title: string;
                maxLength: number;
            };
            guidelines: {
                type: string;
                title: string;
                maxLength: number;
            };
            terms: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            avatar: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            location: {
                type: string;
                title: string;
                maxLength: number;
            };
            website: {
                type: string;
                title: string;
                format: string;
                maxLength: number;
            };
            twitter: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            github: {
                type: string;
                title: string;
                pattern: string;
                maxLength: number;
            };
            email: {
                type: string;
                title: string;
                maxLength: number;
            };
            network: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            symbol: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            skin: {
                type: string;
                title: string;
                maxLength: number;
            };
            domain: {
                type: string;
                title: string;
                maxLength: number;
            };
            strategies: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                            maxLength: number;
                            title: string;
                        };
                        params: {
                            type: string;
                            title: string;
                        };
                    };
                    required: string[];
                    additionalProperties: boolean;
                };
                title: string;
            };
            members: {
                type: string;
                items: {
                    type: string;
                    pattern: string;
                    minLength: number;
                    maxLength: number;
                };
                title: string;
            };
            admins: {
                type: string;
                items: {
                    type: string;
                    pattern: string;
                    minLength: number;
                    maxLength: number;
                };
                title: string;
            };
            filters: {
                type: string;
                properties: {
                    defaultTab: {
                        type: string;
                    };
                    minScore: {
                        type: string;
                        minimum: number;
                    };
                    onlyMembers: {
                        type: string;
                    };
                    invalids: {
                        type: string;
                        items: {
                            type: string;
                            maxLength: number;
                        };
                        title: string;
                    };
                };
                additionalProperties: boolean;
            };
            validation: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        maxLength: number;
                        title: string;
                    };
                    params: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
                additionalProperties: boolean;
            };
            plugins: {
                type: string;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    proposal: {
        title: string;
        type: string;
        properties: {
            name: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            body: {
                type: string;
                title: string;
                minLength: number;
                maxLength: number;
            };
            choices: {
                type: string;
                title: string;
                minItems: number;
                maxItems: number;
            };
            type: {
                type: string;
                enum: string[];
            };
            snapshot: {
                type: string;
                title: string;
            };
            start: {
                type: string;
                title: string;
                minimum: number;
                maximum: number;
            };
            end: {
                type: string;
                title: string;
                minimum: number;
                maximum: number;
                exclusiveMinimum: {
                    $data: string;
                };
            };
            metadata: {
                type: string;
                title: string;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
    vote: {
        title: string;
        type: string;
        properties: {
            proposal: {
                type: string;
                title: string;
            };
            choice: {
                type: string[];
                title: string;
            };
            metadata: {
                type: string;
                title: string;
            };
        };
        required: string[];
        additionalProperties: boolean;
    };
};
export default _default;
