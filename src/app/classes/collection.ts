import { NFT } from './nft/nft';

export class Collection {
    name!: string;
    directory!: string;
    size!: number;
    items!: NFT[];
}
