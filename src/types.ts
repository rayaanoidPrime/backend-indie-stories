export interface Metadata {
  source: string;
  text: string;
}

export interface Match {
  id: string;
  score: number;
  values: any[];
  metadata: Metadata;
}

export interface Data {
  results: any[];
  matches: Match[];
  namespace: string;
  usage: {
    readUnits: number;
  };
}
