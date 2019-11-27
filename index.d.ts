declare namespace isProgrammeID {
  interface Options {
    readonly pid: string;
  }
}

declare function isProgrammeID(pid: string): boolean;

export = isProgrammeID;
