/// <reference types="node" />

declare class SeqIndex {
    constructor(id?: number);

    id: number;
    index: number;
    suffix: string;
    seqCounter: number;
    timestamp: number;

    short(): string;
    get(): string;
    getByTime(time: number, seq?: number): string;
}

export = SeqIndex;
