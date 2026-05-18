/// <reference types="node" />

declare class SeqIndex {
    /**
     * Creates a sequential ID generator.
     *
     * @param id Optional instance ID used to derive the 4-character suffix. If
     * omitted or zero, a random suffix is generated.
     */
    constructor(id?: number);

    id: number;
    index: number;
    suffix: string;
    seqCounter: number;
    timestamp: number;

    /**
     * Generates a sequential short ID for the current time.
     *
     * The output encodes the current Unix timestamp in milliseconds and an
     * in-millisecond sequence counter as hexadecimal. It does not include the
     * instance suffix.
     *
     * @returns A hexadecimal ID string without the 4-character instance suffix.
     */
    short(): string;

    /**
     * Generates a sequential ID for the current time.
     *
     * The output is the short ID from {@link short} followed by this instance's
     * 4-character hexadecimal suffix.
     *
     * @returns A hexadecimal ID string that includes the instance suffix.
     */
    get(): string;

    /**
     * Converts a timestamp and optional sequence number into a short ID.
     *
     * @param time Unix timestamp in milliseconds.
     * @param seq Optional sequence value for the same millisecond. Defaults to
     * zero. Only the low 12 bits are included in the output.
     * @returns A hexadecimal ID string for the supplied time and sequence,
     * without the instance suffix.
     */
    getByTime(time: number, seq?: number): string;
}

export = SeqIndex;
