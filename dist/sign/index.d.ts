import { Web3Provider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { Space, Proposal, CancelProposal, Vote, Follow, Unfollow, Alias } from './types';
export declare const domain: {
    name: string;
    version: string;
};
export default class Client {
    readonly address: string;
    constructor(address?: string);
    sign(web3: Web3Provider | Wallet, address: string, message: any, types: any): Promise<unknown>;
    send(envelop: any): Promise<unknown>;
    space(web3: Web3Provider, address: string, message: Space): Promise<unknown>;
    proposal(web3: Web3Provider, address: string, message: Proposal): Promise<unknown>;
    cancelProposal(web3: Web3Provider, address: string, message: CancelProposal): Promise<unknown>;
    vote(web3: Web3Provider, address: string, message: Vote): Promise<unknown>;
    follow(web3: Wallet, address: string, message: Follow): Promise<unknown>;
    unfollow(web3: Wallet, address: string, message: Unfollow): Promise<unknown>;
    alias(web3: Web3Provider, address: string, message: Alias): Promise<unknown>;
}
